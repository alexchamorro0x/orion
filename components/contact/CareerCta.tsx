import Link from "next/link";

export default function CareerCta() {
  const ResetLocation = () => window.scrollTo(0, 0);
  return (
    <article className="bg-grape-400">
      <section className="max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          <span className="block text-white">Looking for a new career?</span>
          <span className="block text-sky-400">We’re hiring.</span>
        </h2>
        <Link
          onClick={ResetLocation}
          href="/jobs"
          className="mt-8 w-full inline-flex items-center justify-center py-3 px-5 bg-sky-700 rounded-md shadow-md text-base font-medium text-white hover:bg-sky-600 sm:w-auto"
        >
          See Open Positions
        </Link>
      </section>
    </article>
  );
}
