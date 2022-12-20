import Link from "next/link";
import Image from "next/image";

const navigation = {
  solutions: [
    { name: "+1 (516) 713-3832", href: "tel:+1-516-713-3832" },
    // {
    //   name: "oriondigitalconsulting@gmail.com",
    //   href: "mailto:oriondigitalconsulting@gmail.com",
    // },
  ],
  support: [
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Jobs", href: "/jobs" },
  ],
  legal: [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ],
  social: [
    {
      name: "Github",
      href: "https://github.com/alexchamorro0x/orion",
      icon: "/socials/github-pink.svg",
    },
    {
      name: "Portfolio",
      href: "https://alexchamorro0x.github.io/",
      icon: "/socials/portfolio.png",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/aochamorro/",
      icon: "/socials/linkedin-pink.svg",
    },
  ],
};

export default function Footer() {
  const ResetLocation = () => window.scrollTo(0, 0);

  return (
    <footer className="bg-slate-900" aria-labelledby="footer-heading">
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <section className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <section className="grid grid-cols-2 gap-8 xl:col-span-4">
            <section className="md:grid md:grid-cols-2 md:gap-8">
              <section>
                <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        onClick={ResetLocation}
                        href={item.href}
                        className="text-base text-slate-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        onClick={ResetLocation}
                        href={item.href}
                        className="text-base text-slate-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </section>
            <section className="md:grid md:grid-cols-2 md:gap-8">
              <section>
                <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        onClick={ResetLocation}
                        href={item.href}
                        className="text-base text-slate-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        onClick={ResetLocation}
                        href={item.href}
                        className="text-base text-slate-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </section>
          </section>
        </section>

        <section className="mt-8 border-t border-slate-700 pt-8 md:flex md:items-center md:justify-between">
          <section className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-slate-300"
              >
                <span className="sr-only">{item.name}</span>
                <Image
                  width={24}
                  height={24}
                  aria-hidden="true"
                  src={item.icon}
                  alt={item.icon}
                />
              </a>
            ))}
          </section>
          <p className="mt-8 text-base text-slate-400 md:mt-0 md:order-1">
            &copy; 2022 Orion Digital Consulting. All rights reserved.
          </p>
        </section>
      </section>
    </footer>
  );
}
