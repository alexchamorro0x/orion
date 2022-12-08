import { Helmet } from "react-helmet";

export default function MetaTag() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://alexchamorro0x.github.io/orion" />
      <title>Orion Digital Consulting</title>
      <meta
        name="description"
        content="We at Orion Digital Consulting, provides multiple services like Mobile App Development, Digital Marketing, Venture Capital Funding, etc. Contact us to spread your business reach."
      />

      {/* Open Graph Data */}
      <meta property="og:title" content="Orion Digital Consulting" />
      <meta
        property="og:description"
        content="We at Orion Digital Consulting, provides multiple services like Mobile App Development, Digital Marketing, Venture Capital Funding, etc. Contact us to spread your business reach."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://alexchamorro0x.github.io/orion/"
      />
      <meta
        property="og:image"
        content="https://alexchamorro0x.github.io/orion/project-preview.png"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Orion Digital Consulting" />
      <meta
        name="twitter:description"
        content="We at Orion Digital Consulting, provides multiple services like Mobile App Development, Digital Marketing, Venture Capital Funding, etc. Contact us to spread your business reach."
      />
      <meta
        name="twitter:url"
        content="https://alexchamorro0x.github.io/orion/"
      />
      <meta
        name="twitter:image"
        content="https://alexchamorro0x.github.io/orion/project-preview.png"
      />
    </Helmet>
  );
}
