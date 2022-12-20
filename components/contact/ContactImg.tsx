import Image from "next/image";

export default function ContactImg() {
  return (
    <section className="h-80 w-full lg:absolute lg:inset-0 lg:h-full">
      <section className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="w-full h-auto object-cover lg:absolute aspect-w-2 aspect-h-2"
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=80"
          alt="Contact"
          width={800}
          height={800}
          priority
        />
        <section
          aria-hidden="true"
          className="absolute top-0 h-80 w-full bg-gradient-to-t from-slate-900 lg:bg-gradient-to-r lg:h-full"
        />
      </section>
    </section>
  );
}
