import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const StandardFeatures = [
  "Advanced search",
  "Real-time alerts",
  "Application Insights",
];
const PremiumFeatures = [
  "Warm introductions",
  "User Credits",
  "Private Browsing",
  "Business Insights",
  "Lite Benefits",
];
const BusinessFeatures = [
  "Unlimited Browsing",
  "Candidate Tracking",
  "Learning Course",
];

export default function Pricing() {
  const ResetLocation = () => window.scrollTo(0, 0);
  return (
    <article>
      <section className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <section className="text-center">
          <h2 className="text-2xl leading-6 font-semibold text-sky-400 uppercase tracking-wider">
            Pricing
          </h2>
          <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Instagram Growth Plans
          </h3>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-slate-400 sm:mt-5 sm:text-2xl">
            To achieve Instagram account growth, you need to post content more
            frequently and strategically. You need to find out when your
            audience is most likely to be active and then schedule Instagram
            posts accordingly.
          </p>
        </section>
      </section>

      <section className="mt-16 pb-12 lg:mt-20 lg:pb-20">
        <section className="relative z-0">
          <section className="absolute inset-0 h-5/6 lg:h-2/3" />
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="relative lg:grid lg:grid-cols-7">
              <section className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <section className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <section className="flex-1 flex flex-col">
                    <section className="bg-white px-6 py-10">
                      <section>
                        <h3
                          className="text-center text-2xl font-medium text-slate-900"
                          id="tier-hobby"
                        >
                          Standard
                        </h3>
                        <section className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-slate-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">9</span>
                          </span>
                          <span className="text-xl font-medium text-slate-500">
                            /month
                          </span>
                        </section>
                      </section>
                    </section>
                    <section className="flex-1 flex flex-col justify-between border-t-2 border-slate-100 p-6 bg-slate-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        {StandardFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <section className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </section>
                            <p className="ml-3 text-base font-medium text-slate-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <section className="mt-8">
                        <section className="rounded-lg shadow-md">
                          <Link
                            onClick={ResetLocation}
                            href="/sign-up"
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-sky-700 hover:bg-sky-100"
                            aria-describedby="tier-hobby"
                          >
                            Get Started
                          </Link>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
              <section className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <section className="relative z-10 rounded-lg shadow-xl">
                  <section
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-sky-600"
                    aria-hidden="true"
                  />
                  <section className="absolute inset-x-0 top-0 transform translate-y-px">
                    <section className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-sky-700 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        In Demand
                      </span>
                    </section>
                  </section>
                  <section className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <section>
                      <h3
                        className="text-center text-3xl font-semibold text-slate-900 sm:-mx-6"
                        id="tier-growth"
                      >
                        Premium
                      </h3>
                      <section className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-slate-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">
                            $
                          </span>
                          <span className="font-extrabold">19</span>
                        </span>
                        <span className="text-2xl font-medium text-slate-500">
                          /month
                        </span>
                      </section>
                    </section>
                  </section>
                  <section className="border-t-2 border-slate-100 rounded-b-lg pt-10 pb-8 px-6 bg-slate-50 sm:px-10 sm:py-10">
                    <ul className="space-y-4">
                      {PremiumFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <section className="flex-shrink-0">
                            <CheckIcon
                              className="flex-shrink-0 h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </section>
                          <p className="ml-3 text-base font-medium text-slate-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <section className="mt-10">
                      <section className="rounded-lg shadow-md">
                        <Link
                          onClick={ResetLocation}
                          href="/sign-up"
                          className="block w-full text-center rounded-lg border border-transparent bg-sky-700 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-sky-600"
                          aria-describedby="tier-growth"
                        >
                          Get Started
                        </Link>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
              <section className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <section className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <section className="flex-1 flex flex-col">
                    <section className="bg-white px-6 py-10">
                      <section>
                        <h3
                          className="text-center text-2xl font-medium text-slate-900"
                          id="tier-scale"
                        >
                          Business
                        </h3>
                        <section className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-slate-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">39</span>
                          </span>
                          <span className="text-xl font-medium text-slate-500">
                            /month
                          </span>
                        </section>
                      </section>
                    </section>
                    <section className="flex-1 flex flex-col justify-between border-t-2 border-slate-100 p-6 bg-slate-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        {BusinessFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <section className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </section>
                            <p className="ml-3 text-base font-medium text-slate-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <section className="mt-8">
                        <section className="rounded-lg shadow-md">
                          <Link
                            onClick={ResetLocation}
                            href="/sign-up"
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-sky-700 hover:bg-sky-100"
                            aria-describedby="tier-scale"
                          >
                            Get Started
                          </Link>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </article>
  );
}
