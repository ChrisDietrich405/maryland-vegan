import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const restaurants = () => {
  return (
    <main className={styles.restaurants_container}>
      <h1>
        Find your closest vegan restaurant or maybe instead...ROAD TRIP!!!!
      </h1>
      <section className={styles.inner_container}>
        <h3>Baltimore City</h3>
        <ul>
          <li>
            <a
              href="https://landofkush.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Land Of Kush
            </a>
            <p>Address: 840 N Eutaw St, Baltimore, MD 21201</p>
          </li>
          <li>
            <a
              href="https://www.thegreenerkitchen.com/?fbclid=IwAR1-M9QZk0iM2nCtgZYuqDlWtVTDKpK5LDFvLd4-NbPvVpd1tA2LIgo9tkw"
              target="_blank"
            >
              The Greener Kitchen
            </a>
            <p>Address: 803 Washington Blvd, Baltimore, MD 21230</p>
          </li>
          <li>
            <a href="https://dodahskitchen.com/" target="_blank">
              Dodah's Kitchen
            </a>
            <p>Address: 1210 N. Charles St., Baltimore, MD 21201</p>
          </li>
          <li>
            <a
              href="https://www.matthewkenneycuisine.com/double-zero-baltimorehttps://www.matthewkenneycuisine.com/double-zero-baltimore"
              target="_blank"
            >
              Double Zero
            </a>
            <p>Address: 414 Light St, Baltimore, MD 21202, United States</p>
          </li>
          <li>
            <a href="https://www.gangstervegan.com/" target="_blank">
              Gangster Vegan
            </a>
            <p>Address: 1065 S Charles St, Baltimore, MD 21230</p>
            <img
              src="https://static.wixstatic.com/media/5b956f_56740990ed1742f3ba0f768c2c1066af~mv2.png/v1/fill/w_216,h_159,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GANGSTER_VEGAN.png"
              alt="GANGSTER_VEGAN.png"
              style={{ width: "84px", height: "66px", objectFit: "cover" }}
              // style="width:144px;height:106px;object-fit:cover"
              // srcset="https://static.wixstatic.com/media/5b956f_56740990ed1742f3ba0f768c2c1066af~mv2.png/v1/fill/w_216,h_159,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GANGSTER_VEGAN.png"
              // fetchpriority="high"
            ></img>
          </li>
          <li>
            <a href="http://harmonybakery.net/" target="_blank">
              Harmony Bakery
            </a>
            <p>Address: 3446 Chestnut Ave, Baltimore, MD 21211</p>
          </li>
          <li>
            <a href="https://www.legendarylifestylecafe.com/" target="_blank">
              Legendary Lifestyle Cafe 
            </a>
            <p>Address: 1301 North Broadway, Baltimore, Maryland, USA, 21213</p>
          </li>
          <li>
            <a href="https://www.matthewkenneycuisine.com/liora" target="_blank">
            Liora
            </a>
            <p>Address: The "Charm'tastic Mile, 414 Light St, Baltimore, MD 21202</p>
          </li>
          <li>
            <a href="https://mymamasvegan.com/" target="_blank">
            My Mama's Vegan
            </a>
            <p>Address: 2915 Greenmount Ave, Baltimore, Maryland</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default restaurants;
