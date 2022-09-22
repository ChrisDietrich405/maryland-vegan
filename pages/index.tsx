import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Maryland Vegan</title>
        <meta
          name="description"
          content="Maryland Vegan is a resource for vegan events, restaurants, etc...."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marylandvegan.com/" />
        <meta property="og:title" content="Maryland Vegan" />
        <meta
          property="og:description"
          content="Maryland Vegan is a resource for vegan events, restaurants, etc...."
        />
        <meta
          property="og:image"
          content="https://marylandvegan.com/logo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://marylandvegan.com/" />
        <meta property="twitter:title" content="Maryland Vegan" />
        <meta
          property="twitter:description"
          content="Maryland Vegan is a resource for vegan events, restaurants, etc...."
        />
        <meta
          property="twitter:image"
          content="https://marylandvegan.com/logo.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>

      <main>hello</main>
    </div>
  );
};

export default Home;
