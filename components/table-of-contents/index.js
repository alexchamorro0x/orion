import React, { useEffect, useRef, useState } from "react";

function useHeadings() {
  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"))
      .filter((element) => element.id)
      .map((element) => ({
        id: element.id,
        text: element.textContent ?? "",
        level: Number(element.tagName.substring(1)),
      }));
    setHeadings(elements);
  }, []);
  return headings;
}

function getId(children) {
  return children
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-")
    .replace(/[^0-9a-z]/gi, "");
}

const useIntersectionObserver = (ids, setActiveId) => {
  const headingElementsRef = useRef({});
  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -40% 0px",
    });

    const headingElements = ids.map((id) => document.getElementById(id));
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids, setActiveId]);
};

export function Heading({ children, as: Element, ...props }) {
  const theId = getId(children);
  return (
    <Element id={theId} {...props}>
      {children}
    </Element>
  );
}

/**
 * Renders the table of contents.
 */
export function TableOfContent() {
  const [activeId, setActiveId] = useState();
  const headings = useHeadings();
  useIntersectionObserver(
    headings.map(({ id }) => id),
    setActiveId
  );

  return (
    <nav className="toc">
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.id === activeId ? "active" : ""}
          >
            <a
              style={{
                marginLeft: `${heading.level - 2}em`,
              }}
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                const offset = -80;
                const element = document.querySelector(`#${heading.id}`);
                const y = element.getBoundingClientRect().top + window.scrollY + offset;
                window.scrollTo({ top: y, behavior: "smooth" });
                // document.querySelector(`#${heading.id}`).scrollIntoView({
                //   behavior: "smooth",
                // });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
