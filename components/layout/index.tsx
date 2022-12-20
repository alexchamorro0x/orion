import { PropsWithChildren } from "react";
import Navigation from "../navigation";
import Footer from "../footer";
import BackToTop from "../backtotop";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="bg-slate-900">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
