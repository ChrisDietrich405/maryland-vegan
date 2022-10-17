import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.inner_container}>
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

      <main className="container">
        <div className="inner_container">
          <h1>Welcome to Maryland Vegan!</h1>
          <h2>
            This website is dedicated to your health, the planet and most
            importantly the animals. I hope you find the website useful whether
            you're looking for upcoming events, a new restaurant to try out, or
            a weekend trip to an animal sanctuary.
          </h2>
        </div>
        <div className="image_container">
          <Image src="/vegan-health.png" width="400px" height="400px" alt="" />
        </div>
        <div className="image_container">
          <Image src="/animals.jpg" width="400px" height="400px" alt="" />
        </div>
        <div className="image_container">
          <Image src="/climate-change.jpg" width="400px" height="400px" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Home;
