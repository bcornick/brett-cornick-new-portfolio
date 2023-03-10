import Head from 'next/head';

const SiteHeader = () => {
  return (
    <Head>
      <meta
        httpEquiv="X-UA-Compatible"
        content="IE=edge,chrome=1"
      />
      <title>Brett Cornick</title>
      <meta
        name="description"
        content="Portfolio site for Brett Cornick. Brett is a web designer, developer, and project leader with special interests in AI and web3."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link
        rel="icon"
        href="/B.ico"
      />
      <meta
        name="author"
        content="Brett Cornick"
      />

      {/* <!-- Twitter card  --> */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:site"
        content="@brett_cornick"
      />
      <meta
        name="twitter:creator"
        content="@brett_cornick"
      />
      <meta
        name="twitter:title"
        content="Brett Cornick Portfolio"
      />
      <meta
        name="twitter:description"
        content="Brett is a web designer, developer, and project leader with special interests in AI and web3."
      />
      <meta
        name="twitter:image"
        content="https://www.brettcornick.com/_next/image?url=%2Fsite%2Fmeta-image.jpg&w=1200&q=75"
      />

      {/* <!-- Open Graph Meta Tags --> */}
      <meta
        property="og:title"
        content="Brett Cornick Portfolio"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:site_name"
        content="Brett Cornick"
      />
      <meta
        property="og:description"
        content="Brett is a web designer, developer, and project leader with special interests in AI and web3."
      />
      <meta
        property="og:url"
        content="https://www.brettcornick.com/"
      />
      <meta
        property="og:image"
        content="https://www.brettcornick.com/_next/image?url=%2Fsite%2Fmeta-image.jpg&w=1200&q=75"
      />
    </Head>
  );
};

export default SiteHeader;
