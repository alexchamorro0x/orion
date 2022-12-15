import CareerCta from "./CareerCta";
import ContactFormSection from "./ContactFormSection";
import ContactImg from "./ContactImg";

export default function Contact() {
  return (
    <main className="bg-slate-900">
      <article className="relative bg-slate-900">
        <ContactImg />
        <ContactFormSection />
      </article>
      <CareerCta />
    </main>
  );
}
