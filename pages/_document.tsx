import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <!-- HTML Meta Tags --> */}
          <meta name="description" content="We at Orion Digital Consulting, is a social media marketing agency that offers Instagram growth services to businesses and beginner infuluencers." />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://orion-dc.netlify.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Orion Digital Consulting" />
          <meta property="og:description" content="We at Orion Digital Consulting, is a social media marketing agency that offers Instagram growth services to businesses and beginner infuluencers." />
          <meta property="og:image" content="https://orion-dc.netlify.app/project-preview.png" />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="funny-solana-pay.netlify.app" />
          <meta property="twitter:url" content="https://orion-dc.netlify.app" />
          <meta name="twitter:title" content="Orion Digital Consulting" />
          <meta name="twitter:description" content="We at Orion Digital Consulting, is a social media marketing agency that offers Instagram growth services to businesses and beginner infuluencers." />
          <meta name="twitter:image" content="https://orion-dc.netlify.app/project-preview.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
