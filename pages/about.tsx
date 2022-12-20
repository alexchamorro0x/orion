import AboutOne from "../components/about/AboutOne";
import AboutThree from "../components/about/AboutThree";
import AboutTwo from "../components/about/AboutTwo";
import Cta from "../components/cta";
import Team from "../components/team";


export default function About() {
  return (
    <article className="relative py-16 sm:py-24">
      <AboutOne />
      <AboutTwo />
      <AboutThree />
      <Team />
      <Cta />
    </article>
  );
}
