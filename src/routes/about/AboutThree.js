export default function AboutThree() {
  return (
    <article className="relative bg-gray-900">
      <section className="h-80 mt-4 w-full xl:absolute xl:top-0 xl:inset-0 xl:h-full">
        <section className="h-full w-full xl:grid xl:grid-cols-2">
          <section className="h-full xl:relative xl:col-start-1">
            <img
              className="h-full w-full object-cover xl:absolute xl:inset-0"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="People working on laptops"
            />
            <section
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-80 bg-gradient-to-t from-gray-900 xl:bg-gradient-to-l xl:h-full"
            />
          </section>
        </section>
      </section>
      <section className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 ">
        <section className="lg:col-start-2 lg:pl-8 ">
          <section className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0 ">
            <h2 className="leading-6 text-2xl text-indigo-600 font-semibold tracking-wide uppercase">
              Collaborate
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Let's work together
            </h3>
            <p className="mt-8 text-lg text-gray-400">
              We provide services and tools to help overcome the gap between
              potential employers and get you back to work quickly. Whether you
              are retired, looking for some extra work between jobs, or even
              just looking to get some new job experience to obtain a permanent
              position, we're here for you. That is what Orion Digital
              Consulting is all about: assisting you in your search for
              meaningful employment in a position that works for you. Working
              directly with local businesses and service providers we can offer
              unique employment and training opportunities.
            </p>
            <p className="mt-8 text-lg text-gray-400">
              We offer services that equip clients with the tools to find new
              employment opportunities, from creating a premier resume to
              gaining confidence for getting through the grueling interview
              process. Our specialty services can help you open new doors. We
              currently offer multiple services, from soft skills training and
              assistance to safety training and new skill certifications that
              give you an extra footing in the job market. ​
            </p>
            <p className="mt-8 text-lg text-gray-400">
              In addition to providing employment opportunities, soft skill
              training, and certifications, we also offer contract services. As
              a contractor, we are always seeking opportunities to work with
              other companies to benefit their organization as well. We look
              forward to partnering with your business, assisting you with your
              hiring needs, and helping you grow!
            </p>
          </section>
        </section>
      </section>
    </article>
  );
}
