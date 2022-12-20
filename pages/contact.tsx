import CareerCta from "../components/contact/CareerCta";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactImg from "../components/contact/ContactImg";


export default function Contact() {
  return (
    <main>
      <article className="relative">
        <ContactImg />
        <ContactFormSection />
      </article>
      <CareerCta />
    </main>
  );
}
