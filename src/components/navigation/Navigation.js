import EdgyIcon from "../../assets/images/edgy-icon.png";
import { Link } from "react-router-dom";

const links = [
  { name: "About", href: "/orion/about" },
  { name: "Pricing", href: "/orion/pricing" },
  { name: "Blog", href: "/orion/blog" },
  { name: "FAQ", href: "/orion/faq" },
  { name: "Contact", href: "/orion/contact" },
];

export default function Navigation() {
  const ResetLocation = () => window.scrollTo(0, 0);
  return (
    <header className="bg-gray-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <section className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <section className="flex items-center">
            <Link to="/orion" onClick={ResetLocation}>
              <span className="sr-only">Orion Digital Consulting</span>
              <img
                className="h-10 w-auto"
                src={EdgyIcon}
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
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </Link>
            <Link
              onClick={ResetLocation}
              to="/orion/sign-up"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
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
