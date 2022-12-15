import { useState } from "react";

export default function BlogTwo() {
  const [emailError, setEmailError] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
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
    <article className="relative sm:py-16">
      <section className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <section className="relative rounded-2xl px-6 py-10 bg-sky-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
          <section
            aria-hidden="true"
            className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                className="text-sky-500 text-opacity-40"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                className="text-sky-700 text-opacity-40"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </section>
          <section className="relative">
            <section className="sm:text-center">
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Get notified about new posts.
              </h2>
              <p className="mt-6 mx-auto max-w-2xl text-lg text-sky-200">
                Enter your email address to subscribe to this blog and receive
                notifications of new posts by email.
              </p>
            </section>
            <form className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
              <section className="min-w-0 flex-1">
                <label htmlFor="cta-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="cta-email"
                  onChange={(e) => setEmailInput(e.target.value)}
                  type="text"
                  className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600"
                  placeholder="Enter your email"
                />
              </section>
              <section className="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="button"
                  onClick={SubmitEmail}
                  className="block w-full rounded-md border border-transparent px-5 py-3 bg-sky-500 text-base font-medium text-white shadow hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600 sm:px-10"
                >
                  Notify me
                </button>
              </section>
            </form>
            {submitClicked ? (
              !emailError ? (
                <p className="py-3 text-green-500 text-center">
                  You have successfully subscribed to our blog!
                </p>
              ) : (
                <p className="py-3 text-red-800 text-center">
                  Invalid email. Try again!
                </p>
              )
            ) : null}
          </section>
        </section>
      </section>
    </article>
  );
}
