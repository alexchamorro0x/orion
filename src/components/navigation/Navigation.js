import LogoIcon from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isScroll, setIsScroll] = useState(false);
  const ResetLocation = () => window.scrollTo(0, 0);

  useEffect(() => {
    const onScroll = () => {
      if (
        document.body.scrollTop > 110 ||
        document.documentElement.scrollTop >110
      ) {
        setTimeout(() => {
          setIsScroll(true);
        }, 1000);
      } else {
        setTimeout(() => {
          setIsScroll(false);
        }, 1000);
      }
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`header nav-transition backdrop-blur border-b border-indigo-500/25 ${
        isScroll ? "bg-gray-900/50" : "bg-gray-900"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <section
          className={`w-full flex items-center justify-between nav-transition ${
            isScroll ? "py-3" : "py-6"
          }`}
        >
          <section className="flex items-center">
            <Link to="/" onClick={ResetLocation}>
              <span className="sr-only">Orion Digital Consulting</span>
              <img
                className={`w-auto nav-transition ${isScroll ? "h-9" : "h-12"}`}
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
              to="/sign-in"
              className={`inline-block bg-indigo-500 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75 nav-transition ${
                isScroll ? "py-1" : "py-2"
              }`}
            >
              Sign in
            </Link>
            <Link
              onClick={ResetLocation}
              to="/sign-up"
              className={`inline-block bg-white px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50 nav-transition ${
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
