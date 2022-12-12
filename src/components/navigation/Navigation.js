import LogoIcon from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { name: "About", href: "/orion/about" },
  { name: "Pricing", href: "/orion/pricing" },
  { name: "Blog", href: "/orion/blog" },
  { name: "FAQ", href: "/orion/faq" },
  { name: "Contact", href: "/orion/contact" },
];

export default function Navigation() {
  const [isScroll, setIsScroll] = useState(false);
  const ResetLocation = () => window.scrollTo(0, 0);

  useEffect(() => {
    const onScroll = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`header backdrop-blur duration-500 border-b border-indigo-500/25 ${
        isScroll ? "bg-gray-900/50" : "bg-gray-900"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <section
          className={`w-full flex items-center justify-between duration-500 ${
            isScroll ? "py-3" : "py-6"
          }`}
        >
          <section className="flex items-center">
            <Link to="/orion" onClick={ResetLocation}>
              <span className="sr-only">Orion Digital Consulting</span>
              <img
                className={`w-auto duration-500 ${isScroll ? "h-9" : "h-12"}`}
                src={LogoIcon}
                alt="Orion Digital Consulting"
              />
            </Link>
            <section className="hidden ml-10 space-x-8 lg:block">
              {links.map((link) => (
                <Link
                  onClick={ResetLocation}
                  key={link.name}
                  to={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </Link>
              ))}
            </section>
          </section>
          <section className="ml-10 space-x-4">
            <Link
              onClick={ResetLocation}
              to="/orion/sign-in"
              className={`inline-block bg-indigo-500 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75 duration-500 ${
                isScroll ? "py-1" : "py-2"
              }`}
            >
              Sign in
            </Link>
            <Link
              onClick={ResetLocation}
              to="/orion/sign-up"
              className={`inline-block bg-white px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50 duration-500 ${
                isScroll ? "py-1" : "py-2"
              }`}
            >
              Sign up
            </Link>
          </section>
        </section>
        <section className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {links.map((link) => (
            <Link
              onClick={ResetLocation}
              key={link.name}
              to={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </Link>
          ))}
        </section>
      </nav>
    </header>
  );
}
