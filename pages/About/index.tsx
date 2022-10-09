import React from "react";
import Head from "next/head";
import styles from "./styles.module.css";

const about = () => {
  return (
    <>
      <Head>
        <title>About Maryland Vegan</title>
        <meta
          name="description"
          content="Maryland Vegan is dedicated to your health, the planet and most
          importantly the animals. I hope you find the website useful whether
          you're looking for upcoming events, a new restaurant to try out, or a
          weekend trip to an animal sanctuary."
        />
      </Head>
      <main className={styles.container}>
        <div className={styles.inner_container}>
          <h1>Welcome to Maryland Vegan!</h1>
          <h2>
            This website is dedicated to your health, the planet and most
            importantly the animals. I hope you find the website useful whether
            you're looking for upcoming events, a new restaurant to try out, or
            a weekend trip to an animal sanctuary.
          </h2>
        </div>
      </main>
    </>
  );
};

export default about;
