import React from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "./styles.module.css";

const Resources = () => {
  return (
    <>
      <Head>
        <title>Resources</title>
        <meta
          name="description"
          content="Resources is dedicated to the non profits in Maryland working to make the world a more peaceful place"
        />
      </Head>
      <main className={styles.container}>
        <section className={styles.inner_container}>
          <h1>Resources</h1>
          <ul>
            <li>
              <a
                href="https://www.afrovegansociety.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Afro Vegan Society
              </a>
              <p>
                Afro-Vegan Society is a national nonprofit organization with a
                mission to provide resources and support to help people in
                marginalized communities transition to vegan living.
              </p>
            </li>
            <li>
              <a
                href="https://www.animalsanctuary.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Poplar Spring Animal Sanctuary
              </a>
              <p>
                Poplar Spring Animal Sanctuary is a 400 acre non-profit refuge
                in Poolesville, Maryland for farm animals and wildlife.{" "}
              </p>
            </li>
            <li>
              <a
                href="https://blackvegsociety.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Black Veg Society
              </a>
              <p>
                The Black Veg Society’s mission is to educate the public,
                particularly BIPOC communities, on the benefits of veganism and
                the plant-based diet.
              </p>
            </li>
            <li>
              <a
                href="https://earthsavebaltimore.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Earthsave Baltimore
              </a>
              <p>
                Earthsave Baltimore is a local non profit dedicated to promoting
                all aspects of veganism. It hosts potlucks, restaurant get
                togethers and speaking events.
              </p>
            </li>

            <li>
              <a
                href="https://www.vrg.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vegetarian Resource Group
              </a>
              <p>
                Vegetarian Resource Group is a non profit dedicated to educating
                the public about the benefits of a vegan lifestyle.
              </p>
            </li>
            <li>
              <a
                href="https://www.vrg.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vegetarian Resource Group
              </a>
              <p>
                Vegetarian Resource Group is a non profit dedicated to educating
                the public about the benefits of a vegan lifestyle
              </p>
            </li>
            <li>
              <a
                href="https://www.vrg.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vegetarian Resource Group
              </a>
              <p>
                Vegetarian Resource Group is a non profit dedicated to educating
                the public about the benefits of a vegan lifestyle
              </p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
export default Resources;
