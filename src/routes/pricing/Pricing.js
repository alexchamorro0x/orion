import PricingComparisonTable from "./PricingComparisonTable";
import PricingLogos from "./PricingLogos";

export default function Pricing() {
  return (
    <main className="bg-gray-900">
      <section className="text-center p-10">
        <h2 className="text-2xl leading-6 font-semibold text-sky-600 uppercase tracking-wider">
          Pricing Comparison
        </h2>
        <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Instagram Growth Plans
        </h3>
        <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-400 sm:mt-5 sm:text-2xl">
          To achieve Instagram account growth, you need to post content more
          frequently and strategically. You need to find out when your audience
          is most likely to be active and then schedule Instagram posts
          accordingly.
        </p>
      </section>
      <PricingComparisonTable />
      <PricingLogos />
    </main>
  );
}
