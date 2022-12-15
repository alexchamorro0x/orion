import LogoIcon from "../../assets/logo.png";
import ProfileImage from "../../assets/images/profile.png";

const stats = [
  { label: "Founded", value: "2017" },
  { label: "Employees", value: "200" },
  { label: "Beta Users", value: "521" },
  { label: "Raised", value: "$25M" },
];

export default function AboutOne() {
  return (
    <article className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
      <section className="relative sm:py-16 lg:py-0">
        <section
          aria-hidden="true"
          className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
        >
          <svg
            className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-slate-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={392}
              fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
            />
          </svg>
        </section>
        <section className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          {/* Testimonial card*/}
          <section className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={ProfileImage}
              alt="alex chamorro"
            />
            {/* <section className="absolute inset-0 bg-sky-500 mix-blend-multiply opacity-10" /> */}
            <section className="absolute inset-0 bg-gradient-to-t from-sky-600 via-sky-600 opacity-70" />
            <section className="relative px-8">
              <section>
                <img
                  className="h-12 w-auto"
                  src={LogoIcon}
                  alt="Orion Digital Consulting"
                />
              </section>
              <blockquote className="mt-8">
                <section className="relative text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-sky-500"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    He heads the company’s overall goals and technology
                    strategy. He has led technology acquisitions and has
                    invented and developed the company’s products.
                  </p>
                </section>

                <section className="mt-4">
                  <p className="text-xl font-semibold text-white">
                    Alex Chamorro, CEO at Orion Digital Consulting
                  </p>
                </section>
              </blockquote>
            </section>
          </section>
        </section>
      </section>

      <section className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        <section className="pt-12 sm:pt-16 lg:pt-20">
          <h2 className="text-3xl text-white font-extrabold tracking-tight sm:text-4xl">
            On a mission to empower teams
          </h2>
          <section className="mt-6 text-slate-400 space-y-6">
            <p className="text-lg">
              Our goal from day one has been to empower members of IT to easily
              package and deliver complex applications to hundreds of thousands
              of end-users from an intuitive console.
            </p>
            <p className="text-base leading-7">
              With experience across all 5+ years of Windows operating systems,
              we developed Cloudpaging to simplify the mobilization and
              management of applications across modern workspace and multi-cloud
              environments.
            </p>
            <p className="text-base leading-7">
              Fast-forward a few years and we have acquired 58 patents (and
              counting) and actively serve millions of end users around the
              world.
            </p>
          </section>
        </section>

        {/* Stats section */}
        <section className="mt-10">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
            {stats.map((stat) => (
              <section
                key={stat.label}
                className="border-t-2 border-slate-100 pt-6"
              >
                <dt className="text-base font-medium text-slate-400">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </dd>
              </section>
            ))}
          </dl>
        </section>
      </section>
    </article>
  );
}
