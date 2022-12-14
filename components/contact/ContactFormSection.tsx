import ContactForm from "./ContactForm";

export default function ContactFormSection() {
  return (
    <section className="relative py-16 px-4 sm:py-24 sm:px-6 lg:bg-transparent lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
      <section className="lg:pr-8">
        <section className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-lg text-slate-400 sm:mt-3">
            We&apos;d love to hear from you! Send us a message using the form
            opposite, or email us. We&apos;d love to hear from you! Send us a message
            using the form opposite, or email us.
          </p>
          <ContactForm />
        </section>
      </section>
    </section>
  );
}
