import LogoIcon from "../../assets/logo.png";

import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";

export default function SignIn() {
  const ResetLocation = () => window.scrollTo(0, 0);
  return (
    <article className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 pt-40 pb-40">
      <section className="max-w-md w-full space-y-8">
        <section>
          <img
            className="mx-auto h-12 w-auto"
            src={LogoIcon}
            alt="Orion Digital Consulting"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Or{" "}
            <Link
              onClick={ResetLocation}
              to="/orion/sign-up"
              className="font-medium text-base text-indigo-500 hover:text-indigo-400"
            >
              Sign up
            </Link>
          </p>
        </section>
        <SignInForm />
      </section>
    </article>
  );
}
