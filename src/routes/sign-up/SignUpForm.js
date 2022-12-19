export default function SignUpForm() {
  return (
    <form className="mt-8 space-y-6 " action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <section className="flex flex-col gap-4">
        <section>
          <label htmlFor="full-name" className="sr-only">
            Full Name
          </label>
          <input
            id="full-name"
            name="full-name"
            type="text"
            autoComplete="full-name"
            required
            className="relative block w-full px-4 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-slate-900 focus:z-10 sm:text-sm"
            placeholder="Full Name"
          />
        </section>
        <section>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="relative block w-full px-4 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-slate-900 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </section>
        <section>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="relative block w-full px-4 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-slate-900 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </section>
        <section>
          <label htmlFor="repeat-password" className="sr-only">
            Reapeat password
          </label>
          <input
            id="repeat-password"
            name="repeat-password"
            type="password"
            autoComplete="current-password"
            required
            className="relative block w-full px-4 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-slate-900 focus:z-10 sm:text-sm"
            placeholder="Reapeat password"
          />
        </section>
      </section>

      <section>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-700 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-slate-900"
        >
          Sign up
        </button>
      </section>
    </form>
  );
}
