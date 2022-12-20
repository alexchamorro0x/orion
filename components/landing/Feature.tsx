import Image from "next/image";

const features = [
  {
    name: "Flexible plans",
    icon: "/images/payment-plan.png",
  },
  {
    name: "Targeted audience",
    icon: "/images/target-audience.png",
  },
  {
    name: "Content management",
    icon: "/images/content-management.png",
  },
  {
    name: "Organic followers",
    icon: "/images/followers.png",
  },
  {
    name: "Advanced security",
    icon: "/images/security.png",
  },

  {
    name: "24/7 support",
    icon: "/images/customer-support.png",
  },
];

export default function Feature() {
  return (
    <article className="relative bg-slate-900 py-16 sm:py-24 lg:py-32">
      <section className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-semibold uppercase tracking-wider text-sky-400">
          100% handcraft growth
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Our passion is your success
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-slate-400">
          We work to understand the uniqueness of your organization and vision
          so we can set up and support your success every day.
        </p>
        <section className="mt-12">
          <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <section key={feature.name} className="pt-6">
                <section className="flow-root rounded-lg px-6 pb-8">
                  <section className="-mt-6">
                    <section className="inline-flex items-center justify-center rounded-md bg-sky-700 hover:bg-sky-600 p-3 shadow-lg">
                      <Image
                        src={feature.icon}
                        alt={feature.name}
                        className="text-white cursor-pointer"
                        aria-hidden="true"
                        width={40}
                        height={40}
                      />
                    </section>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-white">
                      {feature.name}
                    </h3>
                  </section>
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </article>
  );
}
