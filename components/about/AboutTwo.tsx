import Link from "next/link";

export default function AboutTwo() {
  const ResetLocation = () => window.scrollTo(0, 0);
  return (
    <article className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8">
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
                className="text-slate-200"
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
                className="text-slate-200"
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
        <section className="relative z-10 mb-8 md:mb-2 md:px-6 bg-slate-900">
          <section className="text-base max-w-prose lg:max-w-none ">
            <h2 className="leading-6 text-2xl text-sky-400 font-semibold tracking-wide uppercase">
              Become an influencer
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Get Instagram Followers Using Our Powerful Growth Strategies
            </p>
          </section>
        </section>
        <section className="relative">
          <section className="relative md:bg-slate-900 md:p-6">
            <section className="lg:grid lg:grid-cols-2 lg:gap-6">
              <section className="prose prose-sky prose-lg text-slate-400 lg:max-w-none">
                <p className="text-xl font-semibold text-sky-400 my-2">
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
                    Follow me if you&apos;re into, you know, securing your
                    financial future and binary options.
                  </li>
                  <li>
                    Your go-to for quick marketing tips and brilliant, original
                    memes.
                  </li>
                  <li>Cooking tips for the cullinarily challenged.</li>
                </ul>
                <p className="text-xl font-semibold text-sky-400 my-2">
                  Pick the right handle
                </p>
                <p>
                  First thing&apos;s first, make sure your Instagram handle is
                  as close to your business name and to your other social media
                  handles as possible. This ensures your account will be easy to
                  remember, find, and recognize.
                </p>
                <p className="text-xl font-semibold text-sky-400 my-2">
                  Make sure it&apos;s a business profile
                </p>
                <p>
                  An Instagram business profile gives you access to analytics
                  that will show you who your followers are, what content they
                  like best, and whether you&apos;re gaining or losing them. If
                  you haven&apos;t made the switch, go to the hamburger in the
                  top right of your bio, tap Settings, then tap Switch to
                  Professional Account. Select your category, provide your
                  business details, and you&apos;ll be good to go.
                </p>
              </section>
              <section className="mt-6 prose prose-sky prose-lg text-slate-400 lg:mt-0">
                <p className="text-xl font-semibold text-sky-400 my-2">
                  Make use of all the formats
                </p>
                <p>
                  One thing that distinguishes Instagram from other popular
                  social media platforms is its different formats. These keep
                  the user&apos;s attention and allow you to show different
                  aspects of your brand. So take advantage of:
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
                <p className="text-xl font-semibold text-sky-400 my-2">
                  Publish great content—consistently
                </p>
                <p>
                  The great content part goes without saying, but the
                  consistency part often gets overlooked. One great post might
                  win you a follow, but now you&apos;re in the spotlight.
                  They&apos;re seeing your content regularly and if you
                  can&apos;t continue delivering what brought them in in the
                  first place, you&apos;ll get the unfollow. So, what makes
                  great content on Instagram?
                </p>
                <ul className="ml-8 list-outside list-disc">
                  <li>
                    <strong>Useful:</strong> relevant to your industry and your
                    audience&apos;s needs. Tips, facts, news, ideas.
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
                href="/contact"
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-700 hover:bg-sky-600"
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
