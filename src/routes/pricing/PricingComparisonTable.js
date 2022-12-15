import { Fragment } from "react";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/solid";

const sections = [
  {
    name: "Features",
    features: [
      {
        name: "Advanced search",
        tiers: { Standard: true, Premium: true, Business: true },
      },
      {
        name: "Lead and Account Recommendations",
        tiers: { Standard: true, Premium: true, Business: true },
      },
      {
        name: "Warm introductions",
        tiers: { Premium: true, Business: true },
      },
      {
        name: "User Credits",
        tiers: { Premium: "Up to 20 users", Business: "Up to 50 users" },
      },
    ],
  },
  {
    name: "Reporting",
    features: [
      {
        name: "Real-time alerts",
        tiers: { Standard: true, Premium: true, Business: true },
      },
      {
        name: "Private Browsing",
        tiers: { Premium: true, Business: true },
      },
      { name: "Unlimited Browsing", tiers: { Business: true } },
      {
        name: "Candidate Tracking",
        tiers: { Business: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Application Insights",
        tiers: { Standard: true, Premium: true, Business: true },
      },
      { name: "Business Insights", tiers: { Premium: true, Business: true } },
      {
        name: "Lite Benefits",
        tiers: { Premium: true, Business: true },
      },
      {
        name: "Learning Course",
        tiers: { Business: true },
      },
    ],
  },
];

const tiers = [
  {
    name: "Standard",
    href: "#",
    priceMonthly: 79,
    description: "The basics for Instagram growth.",
  },
  {
    name: "Premium",
    href: "#",
    priceMonthly: 149,
    description: "Advanced features and support for multiple users.",
  },
  {
    name: "Business",
    href: "#",
    priceMonthly: 349,
    description:
      "Collaboration, security, & compliance for larger users getting started.",
  },
];

export default function PricingComparisonTable() {
  return (
    <section className="max-w-2xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {/* xs to lg */}
      <section className="space-y-24 lg:hidden">
        {tiers.map((tier) => (
          <section key={tier.name}>
            <section className="px-4 mb-8">
              <h2 className="text-lg leading-6 font-medium text-slate-900">
                {tier.name}
              </h2>
              <p className="mt-4">
                <span className="text-4xl font-extrabold text-slate-900">
                  ${tier.priceMonthly}
                </span>
                <span className="text-base font-medium text-slate-500">/mo</span>
              </p>
              <p className="mt-4 text-sm text-slate-500">{tier.description}</p>
              <a
                href={tier.href}
                className="mt-6 block w-full bg-sky-600 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Buy {tier.name}
              </a>
            </section>

            {sections.map((section) => (
              <table key={section.name} className="w-full">
                <caption className="bg-slate-50 border-t border-slate-200 py-3 px-4 text-sm font-medium text-slate-900 text-left">
                  {section.name}
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {section.features.map((feature) => (
                    <tr key={feature.name} className="border-t border-slate-200">
                      <th
                        className="py-5 px-4 text-sm font-normal text-slate-500 text-left"
                        scope="row"
                      >
                        {feature.name}
                      </th>
                      <td className="py-5 pr-4">
                        {typeof feature.tiers[tier.name] === "string" ? (
                          <span className="block text-sm text-slate-700 text-right">
                            {feature.tiers[tier.name]}
                          </span>
                        ) : (
                          <>
                            {feature.tiers[tier.name] === true ? (
                              <CheckIcon
                                className="ml-auto h-5 w-5 text-green-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <MinusIcon
                                className="ml-auto h-5 w-5 text-slate-400"
                                aria-hidden="true"
                              />
                            )}

                            <span className="sr-only">
                              {feature.tiers[tier.name] === true ? "Yes" : "No"}
                            </span>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}

            <section className="border-t border-slate-200 px-4 pt-5">
              <a
                href="/"
                className="block w-full bg-sky-600 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
              >
                Buy {tier.name}
              </a>
            </section>
          </section>
        ))}
      </section>

      {/* lg+ */}
      <section className="hidden lg:block">
        <table className="w-full h-px table-fixed text-center">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead>
            <tr>
              <th
                className="pb-4 pl-6 pr-6 text-sm font-medium text-slate-900 text-left"
                scope="col"
              >
                <span className="sr-only">Feature by</span>
                <span>Plans</span>
              </th>
              {tiers.map((tier) => (
                <th
                  key={tier.name}
                  className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-slate-900"
                  scope="col"
                >
                  {tier.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="border-t border-slate-200 divide-y divide-slate-200">
            <tr>
              <th
                className="py-8 pl-6 pr-6 align-top text-sm font-medium text-slate-900 text-left"
                scope="row"
              >
                Pricing
              </th>
              {tiers.map((tier) => (
                <td key={tier.name} className="h-full py-8 px-6 align-top">
                  <section className="h-full flex flex-col justify-between">
                    <section>
                      <p>
                        <span className="text-4xl font-extrabold text-slate-900">
                          ${tier.priceMonthly}
                        </span>
                        <span className="text-base font-medium text-slate-500">
                          /mo
                        </span>
                      </p>
                      <p className="mt-4 text-sm text-slate-500">
                        {tier.description}
                      </p>
                    </section>
                    <a
                      href={tier.href}
                      className="mt-6 block w-full bg-sky-600 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                    >
                      Buy {tier.name}
                    </a>
                  </section>
                </td>
              ))}
            </tr>
            {sections.map((section) => (
              <Fragment key={section.name}>
                <tr>
                  <th
                    className="py-3 pl-6 bg-slate-50 text-sm font-medium text-slate-900 text-left"
                    colSpan={4}
                    scope="colgroup"
                  >
                    {section.name}
                  </th>
                </tr>
                {section.features.map((feature) => (
                  <tr key={feature.name}>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-slate-500 text-left"
                      scope="row"
                    >
                      {feature.name}
                    </th>
                    {tiers.map((tier) => (
                      <td key={tier.name} className="py-5 px-6">
                        {typeof feature.tiers[tier.name] === "string" ? (
                          <span className="block text-sm text-slate-700">
                            {feature.tiers[tier.name]}
                          </span>
                        ) : (
                          <>
                            {feature.tiers[tier.name] === true ? (
                              <CheckIcon
                                className="h-5 w-5 text-green-500 m-auto"
                                aria-hidden="true"
                              />
                            ) : (
                              <MinusIcon
                                className="h-5 w-5 text-slate-400 m-auto"
                                aria-hidden="true"
                              />
                            )}

                            <span className="sr-only">
                              {feature.tiers[tier.name] === true
                                ? "Included"
                                : "Not included"}{" "}
                              in {tier.name}
                            </span>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-slate-200">
              <th className="sr-only" scope="row">
                Choose your plan
              </th>
              {tiers.map((tier) => (
                <td key={tier.name} className="pt-5 px-6">
                  <a
                    href="/"
                    className="block w-full bg-sky-600 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                  >
                    Buy {tier.name}
                  </a>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </section>
    </section>
  );
}
