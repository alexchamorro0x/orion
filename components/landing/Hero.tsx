import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [emailError, setEmailError] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);

  const ResetLocation = () => window.scrollTo(0, 0);
  function SubmitEmail() {
    const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.length === 0) {
      return;
    }
    emailValidation.test(emailInput)
      ? setEmailError(false)
      : setEmailError(true);
    setSubmitClicked(true);
  }
  return (
    <article className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <section className="mx-auto max-w-7xl lg:px-8">
        <section className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* CONTENT SECTION */}
          <section className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <section className="lg:py-24">
              <h1 className="mt-4 text-5xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                Orion Digital Consulting
              </h1>
              <p className="mt-3 text-base text-slate-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Easily create, analyze, and schedule Instagram posts, Stories,
                and Reels with Hootsuite. Save time and get results.
              </p>
              <section className="mt-10 sm:mt-12">
                <form className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <section className="sm:flex">
                    <section className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="text"
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="Enter your email"
                        className="block w-full px-4 py-3 rounded-md border-0 text-base text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-slate-900"
                      />
                    </section>
                    <section className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="button"
                        onClick={SubmitEmail}
                        className="block w-full py-3 px-4 rounded-md shadow bg-sky-700 text-white font-medium hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-slate-900"
                      >
                        Start free trial
                      </button>
                    </section>
                  </section>
                  {submitClicked ? (
                    !emailError ? (
                      <p className="py-3 text-green-500">
                        You have successfully applied for free trial! Please
                        check your email
                      </p>
                    ) : (
                      <p className="py-3 text-red-600">
                        Invalid email. Try again!
                      </p>
                    )
                  ) : null}
                  <p className="mt-3 text-sm text-slate-400 sm:mt-4">
                    Start your free 14-day trial, no credit card necessary. By
                    providing your email, you agree to our{" "}
                    <Link
                      href="/terms"
                      className="font-medium text-white"
                      onClick={ResetLocation}
                    >
                      terms of service
                    </Link>
                    .
                  </p>
                </form>
              </section>
            </section>
          </section>
          {/* IMAGE SECTION */}
          <section className="flex items-center justify-center">
            <Image
              className="w-80 h-auto lg:w-[480px] aspect-w-2 aspect-h-2"
              src="/images/instagram-cover.png"
              alt="instagram cover"
              width={480}
              height={480}
              priority
            />
          </section>
        </section>
      </section>
    </article>
  );
}
