import React, { useState, useEffect } from "react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div
      style={{ display: visible ? "inline" : "none" }}
      className="backToTop shadow"
      onClick={scrollToTop}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 15H34V18H16V15ZM25 21L32.2603 29.1678C32.5469 29.4903 32.318 30 31.8866 30H27V36H23V30H18.1134C17.682 30 17.4531 29.4903 17.7397 29.1678L25 21Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default BackToTop;
