import Cta from "../components/cta";
import Feature from "../components/landing/Feature";
import Hero from "../components/landing/Hero";
import Logocloud from "../components/landing/Logocloud";
import Newsletter from "../components/landing/Newsletter";
import Pricing from "../components/landing/Pricing";
import Stats from "../components/landing/Stats";
import Testimonials from "../components/landing/Testimonials";
import Team from "../components/team";


function Landing() {
  return (
    <article>
      <Hero />
      <Logocloud />
      <Feature />
      <Cta />
      <Stats />
      <Pricing />
      <Testimonials />
      <Team />
      <Newsletter />
    </article>
  );
}

export default Landing;