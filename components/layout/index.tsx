import { PropsWithChildren } from "react";
import Navigation from "../navigation";
import Footer from "../footer";
import BackToTop from "../backtotop";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <Navigation />
      <main className="bg-slate-900">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
