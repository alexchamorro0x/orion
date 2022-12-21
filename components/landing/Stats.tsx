import Image from "next/image";

const stats = [
  {
    id: 1,
    stat: "5K+",
    title: "Happy Customers",
    // desc: "use laoreet amet lacus nibh integer quis.",
  },
  {
    id: 2,
    stat: "205M+",
    title: "Followers Gained",
    // desc: "lacus nibh integer quis.",
  },
  {
    id: 3,
    stat: "+150%",
    title: "Increased Engagement",
    // desc: "laoreet amet lacus nibh integer quis.",
  },
  {
    id: 4,
    stat: "+33%",
    title: "Increased Leads",
    // desc: "lacus nibh integer quis.",
  },
];

export default function Stats() {
  return (
    <article className="relative">
      <section className="h-64 w-full absolute bottom-0 lg:inset-0 lg:h-full">
        <section className="h-full w-full lg:grid lg:grid-cols-2">
          <section className="h-full lg:relative lg:col-start-2">
            <Image
              className="lg:absolute lg:inset-0 object-cover"
              src="https://images.unsplash.com/photo-1595039838779-f3780873afdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="People working on laptops"
              fill
              sizes="(min-width: 1024px) 50vW, 100vW"
            />
            <section
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-64 w-full bg-gradient-to-b from-slate-900 to-slate-500/20 lg:inset-y-0 lg:left-0 lg:h-full lg:bg-gradient-to-r"
            />
          </section>
        </section>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-x-8">
        <section className="relative pt-12 pb-64 lg:col-start-1 lg:pb-24">
          <h2 className="text-2xl font-semibold text-sky-400 tracking-wide uppercase">
            Valuable Metrics
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            TRUSTED BY THOUSANDS OF BUSINESS OWNERS
          </p>
          <p className="mt-5 text-lg text-slate-400">
            A strategic management performance metric used to identify various
            internal business functions and their resulting external outcomes.
          </p>
          <section className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {stats.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-slate-400">
                  <span className="font-medium text-white">{item.title}</span>{" "}
                  {/* {item.desc} */}
                </span>
              </p>
            ))}
          </section>
        </section>
      </section>
    </article>
  );
}
