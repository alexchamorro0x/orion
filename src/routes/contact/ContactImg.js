export default function ContactImg() {
  return (
    <section className="lg:absolute lg:inset-0">
      <section className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          alt="Contact"
        />
      </section>
    </section>
  );
}
