import PhoneIcon from "../../assets/images/customer-support.png";
import SecurityIcon from "../../assets/images/security.png";
import FollowerIcon from "../../assets/images/followers.png";
import ContentIcon from "../../assets/images/content-management.png";
import TargetIcon from "../../assets/images/target-audience.png";
import PlanIcon from "../../assets/images/payment-plan.png";

const features = [
  {
    name: "Flexible plans",
    icon: PlanIcon,
  },
  {
    name: "Targeted audience",
    icon: TargetIcon,
  },
  {
    name: "Content management",
    icon: ContentIcon,
  },
  {
    name: "Organic followers",
    icon: FollowerIcon,
  },
  {
    name: "Advanced security",
    icon: SecurityIcon,
  },

  {
    name: "24/7 support",
    icon: PhoneIcon,
  },
];

export default function Feature() {
  return (
    <article className="relative bg-slate-900 py-16 sm:py-24 lg:py-32">
      <section className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-semibold uppercase tracking-wider text-sky-600">
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
                    <section className="inline-flex items-center justify-center rounded-md bg-sky-500 p-3 shadow-lg">
                      <img
                        src={feature.icon}
                        alt="/"
                        className="h-10 w-10 text-white cursor-pointer"
                        aria-hidden="true"
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
