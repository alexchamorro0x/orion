import Cta from "../components/cta";
import FaqList from "../components/faq/FaqList";

export default function FaqPage() {
  return (
    <article>
      <section className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <section className="max-w-3xl mx-auto divide-y divide-slate-700">
          <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
         <FaqList/>
        </section>
      </section>
      <Cta />
    </article>
  );
}
