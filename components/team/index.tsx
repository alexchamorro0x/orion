import Image from "next/image";

const team = [
  {
    name: "Steven Francis",
    role: "Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1615208429553-d9982932ca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=160&h=160&q=80",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    name: "Charly Stuart",
    role: "Team Leader",
    imageUrl:
      "https://images.unsplash.com/photo-1594823823554-b3cf73448d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=160&h=160&q=80",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    name: "Fox Lister",
    role: "Growth Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=160&h=160&q=80",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    name: "Whitney Francis",
    role: "Head of Marketing",
    imageUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=160&h=160&q=80",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    name: "David Wisley",
    role: "Sales Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=160&h=160&q=80",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
  {
    name: "Colt Denson",
    role: "Customer Support",
    imageUrl:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=160&h=160&q=80",
    twitterUrl: "https://twitter.com/",
    linkedinUrl: "https://www.linkedin.com/",
  },
];

export default function Team() {
  return (
    <article>
      <section className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <section className="space-y-12">
          <section className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Meet Our Team
            </h3>
            <p className="mt-3 max-w-4xl mx-auto text-xl text-slate-400 sm:mt-5 sm:text-2xl">
              We&apos;re Orion Digital Consulting, the team you never knew you
              needed until now. Since 2017, we have built core operating
              technology, mobile apps and complex web applications that drive
              business growth while solving our clients&apos; toughest
              challenges. Our clients&apos; hardest problems are our favorite
              problems.
            </p>
          </section>
          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            {team.map((person) => (
              <li key={person.name}>
                <section className="space-y-6">
                  <Image
                    className="mx-auto rounded-full shadow-md object-cover"
                    src={person.imageUrl}
                    alt={person.name}
                    width={160}
                    height={160}
                  />
                  <section className="space-y-2">
                    <section className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-white">{person.name}</h3>
                      <p className="text-sky-400">{person.role}</p>
                    </section>
                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a
                          href={person.twitterUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-slate-500"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={person.linkedinUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-slate-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
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
