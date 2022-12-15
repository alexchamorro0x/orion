import { Link } from "react-router-dom";

export default function AboutTwo() {
  const ResetLocation = () => window.scrollTo(0, 0);
  return (
    <article
      className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden"
    >
      <section className="relative max-w-max lg:max-w-7xl mx-auto">
        <svg
          className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={384}
            fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
          />
        </svg>
        <svg
          className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
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
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={384}
            fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
          />
        </svg>
        <section className="relative z-10 mb-8 md:mb-2 md:px-6 bg-gray-900">
          <section className="text-base max-w-prose lg:max-w-none ">
            <h2 className="leading-6 text-2xl text-sky-600 font-semibold tracking-wide uppercase">
              Become an influencer
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Get Instagram Followers Using Our Powerful Growth Strategies
            </p>
          </section>
        </section>
        <section className="relative">
          <section className="relative md:bg-gray-900 md:p-6">
            <section className="lg:grid lg:grid-cols-2 lg:gap-6">
              <section className="prose prose-sky prose-lg text-gray-400 lg:max-w-none">
                <p className="text-xl font-semibold text-sky-500 my-2">
                  Give people a reason to follow you
                </p>
                <p>
                  Instead of (or in addition to) just putting your credentials,
                  slogan, or value proposition in your Instagram bio, give
                  potential followers a clear picture of what they can expect if
                  they follow you. For example:
                </p>
                <ul className="ml-8 list-outside list-disc">
                  <li>
                    Follow for dog training tips; prepare for cuteness overload.
                  </li>
                  <li>
                    Follow me if you’re into, you know, securing your financial
                    future and binary options.
                  </li>
                  <li>
                    Your go-to for quick marketing tips and brilliant, original
                    memes.
                  </li>
                  <li>Cooking tips for the cullinarily challenged.</li>
                </ul>
                <p className="text-xl font-semibold text-sky-500 my-2">
                  Pick the right handle
                </p>
                <p>
                  First thing’s first, make sure your Instagram handle is as
                  close to your business name and to your other social media
                  handles as possible. This ensures your account will be easy to
                  remember, find, and recognize.
                </p>
                <p className="text-xl font-semibold text-sky-500 my-2">
                  Make sure it’s a business profile
                </p>
                <p>
                  An Instagram business profile gives you access to analytics
                  that will show you who your followers are, what content they
                  like best, and whether you’re gaining or losing them. If you
                  haven’t made the switch, go to the hamburger in the top right
                  of your bio, tap Settings, then tap Switch to Professional
                  Account. Select your category, provide your business details,
                  and you’ll be good to go.
                </p>
              </section>
              <section className="mt-6 prose prose-sky prose-lg text-gray-400 lg:mt-0">
                <p className="text-xl font-semibold text-sky-500 my-2">
                  Make use of all the formats
                </p>
                <p>
                  One thing that distinguishes Instagram from other popular
                  social media platforms is its different formats. These keep
                  the user’s attention and allow you to show different aspects
                  of your brand. So take advantage of:
                </p>
                <ul className="ml-8 list-outside list-disc">
                  <li>
                    <strong>Feed posts:</strong> photos and videos of best
                    quality.
                  </li>
                  <li>
                    <strong>Stories:</strong> shortlived content, more raw and
                    spontaneous.
                  </li>
                  <li>
                    <strong>Reels:</strong> videos with a little extra focus on
                    the entertainment factor.
                  </li>
                  <li>
                    <strong>Lives:</strong> real-time videos, great for
                    tutorials and AMAs
                  </li>
                </ul>
                <p className="text-xl font-semibold text-sky-500 my-2">
                  Publish great content—consistently
                </p>
                <p>
                  The great content part goes without saying, but the
                  consistency part often gets overlooked. One great post might
                  win you a follow, but now you’re in the spotlight. They’re
                  seeing your content regularly and if you can’t continue
                  delivering what brought them in in the first place, you’ll get
                  the unfollow. So, what makes great content on Instagram?
                </p>
                <ul className="ml-8 list-outside list-disc">
                  <li>
                    <strong>Useful:</strong> relevant to your industry and your
                    audience’s needs. Tips, facts, news, ideas.
                  </li>
                  <li>
                    <strong>Thoughtful:</strong> speaks to their values,
                    lifestyles, and personalities.
                  </li>
                  <li>
                    <strong>Interactive:</strong> makes you fun to follow!
                    Polls, questions, Lives, contests, shareable content.
                  </li>
                  <li>
                    <strong>Entertaining:</strong> captures and keeps attention.
                    Attractive design, movement, emotion, humor, video,
                    boldness.
                  </li>
                </ul>
              </section>
            </section>
            <section className="mt-8 inline-flex rounded-md shadow">
              <Link
                onClick={ResetLocation}
                to="/contact"
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"
              >
                Contact us
              </Link>
            </section>
          </section>
        </section>
      </section>
    </article>
  );
}
