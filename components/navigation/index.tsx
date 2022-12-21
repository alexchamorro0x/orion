import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const ResetLocation = () => window.scrollTo(0, 0);

  return (
    <header className="header backdrop-blur bg-slate-900/70 border-b border-sky-500/25">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <section className="w-full flex items-center justify-between py-4">
          <section className="flex items-center">
            <Link href="/" onClick={ResetLocation}>
              <span className="sr-only">Orion Digital Consulting</span>
              <Image
                className="h-9 w-auto object-contain nav-transition aspect-w-4 aspect-h-1 lg:h-12"
                src="/logo.png"
                alt="Orion Digital Consulting"
                width={192}
                height={48}
                priority
              />
            </Link>
            <section className="hidden ml-10 space-x-8 lg:block">
              {links.map((link) => (
                <Link
                  onClick={ResetLocation}
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-sky-50"
                >
                  {link.name}
                </Link>
              ))}
            </section>
          </section>
          <section className="ml:auto space-x-4">
            <Link
              onClick={ResetLocation}
              href="/sign-in"
              className="inline-block bg-sky-700 px-4 py-1 border border-transparent rounded-md text-base font-medium text-white hover:bg-sky-600 lg:py-2"
            >
              Sign in
            </Link>
            <Link
              onClick={ResetLocation}
              href="/sign-up"
              className="inline-block bg-white px-4 py-1 border border-transparent rounded-md text-base font-medium text-sky-700 hover:bg-sky-100 lg:py-2"
            >
              Sign up
            </Link>
          </section>
        </section>
        <section className="pb-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {links.map((link) => (
            <Link
              onClick={ResetLocation}
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-sky-50"
            >
              {link.name}
            </Link>
          ))}
        </section>
      </nav>
    </header>
  );
}
