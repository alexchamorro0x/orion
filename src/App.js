import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components/
import Navigation from "./components/navigation/Navigation";
import Landing from "./routes/landing/Landing";
import Footer from "./components/footer/Footer";
import Contact from "./routes/contact/Contact";
import Pricing from "./routes/pricing/Pricing";
import Faq from "./routes/faq/Faq";
import Blog from "./routes/blog/Blog";
import About from "./routes/about/About";
import Terms from "./routes/terms/Terms";
import Refunds from "./routes/refunds/Refunds";
import Privacy from "./routes/privacy/Privacy";
import Jobs from "./routes/jobs/Jobs";
import SignIn from "./routes/sign-in/SignIn";
import SignUp from "./routes/sign-up/SignUp";
import MetaTag from "./components/metatag/MetaTag";

export default function App() {
  return (
    <Router>
      <MetaTag />
      <Navigation />
      <Routes>
        <Route path="/orion" element={<Landing />} />
        <Route path="/orion/contact" element={<Contact />} />
        <Route path="/orion/pricing" element={<Pricing />} />
        <Route path="/orion/faq" element={<Faq />} />
        <Route path="/orion/blog" element={<Blog />} />
        <Route path="/orion/about" element={<About />} />
        <Route path="/orion/terms" element={<Terms />} />
        <Route path="/orion/refunds" element={<Refunds />} />
        <Route path="/orion/privacy" element={<Privacy />} />
        <Route path="/orion/jobs" element={<Jobs />} />
        <Route path="/orion/sign-in" element={<SignIn />} />
        <Route path="/orion/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}
