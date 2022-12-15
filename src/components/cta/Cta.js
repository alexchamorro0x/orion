import { Link } from "react-router-dom";
export default function Cta() {
  const ResetLocation = () => window.scrollTo(0, 0);
  return (
    <article className="bg-slate-900">
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          <span className="block text-white">Ready to dive in?</span>
          <span className="block text-sky-400">
            Start your free trial today.
          </span>
        </h2>
        <section className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <section className="inline-flex rounded-md shadow">
            <Link
              onClick={ResetLocation}
              to="/sign-up"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-700 hover:bg-sky-600"
            >
              Get started
            </Link>
          </section>
        </section>
      </section>
    </article>
  );
}
