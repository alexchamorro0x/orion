import Image from "next/image";

const jobs = [
  {
    department: "Human Resource Management",
    role: "HR Assistant",
    imageUrl:
      "https://images.unsplash.com/photo-1459499362902-55a20553e082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&h=256&q=80",
    desc: "We're looking for someone who is passionate about Human Resources and specializes in topics related to employment such as benefits, compensation, personal data, HR systems and web tools.",
  },
  {
    department: "Social Media Marketing",
    role: "Data Entry Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&h=256&q=80",
    desc: "We currently have an excellent opportunity for highly-skilled and motivated data entry specialists. We are looking for a data-driven guru who has great attention and looking to thrive in a dynamic, growing environment.",
  },
  {
    department: "Software Engineer",
    role: "MERN Stack Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&h=256&q=80",
    desc: "We are looking for a MERN stack engineer to be an integral part of our team currently developing a game changing solution which will revolutionize how applications are deployed on cloud desktops.",
  },
  {
    department: "Customer Support",
    role: "Senior Assistant Customer Support",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&h=256&q=80",
    desc: 'We have a Contract position for "Senior Assistant Customer Support" with one of our direct clients in Conway, Arkansas for initial contract duration of 10+ months.',
  },
];

export default function JobsOne() {
  return (
    <article className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <section className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <section className="space-y-5 sm:space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Jobs
          </h2>
          <p className="text-xl text-slate-400">
            Seeking the opportunity to join a rapidly growing, cutting-edge
            cloud technology company? Look no further!
          </p>
        </section>
        <section className="lg:col-span-2">
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
            {jobs.map((job) => (
              <li key={job.department}>
                <section className="space-y-4">
                  <section>
                    <Image
                      className="object-cover shadow-lg rounded-lg aspect-w-3 aspect-h-2 h-auto"
                      src={job.imageUrl}
                      alt={job.department}
                      width={384}
                      height={256}
                      priority
                    />
                  </section>
                  <section className="text-lg leading-6 font-medium space-y-1">
                    <h3 className="text-white">{job.department}</h3>
                    <p className="text-sky-400">{job.role}</p>
                  </section>
                  <section className="text-lg">
                    <p className="text-slate-400">{job.desc}</p>
                  </section>
                </section>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </article>
  );
}
