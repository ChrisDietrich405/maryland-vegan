import React from 'react'
import styles from "../../styles/restaurants.module.css"

const WashingtonDC = () => {
  return (
    <div className={styles.restaurant_container}>
    <h2>Washington D.C.</h2>
    <ul>
      <li>
        <a href="https://www.elizabethsgoneraw.com/" target="_blank">
          Elizabeth's Gone Raw
        </a>
        <p>Address: 1341 L St NW Suite 1, Washington, DC </p>
      </li>
      <li>
        <a href="https://www.fancyradishdc.com/" target="_blank">
          Fancy Radish
        </a>
        <p>Address: 600 H St NE, Washington, DC 20002 </p>
      </li>
      <li>
        <a href="https://vegz.us/" target="_blank">
          VEGZ
        </a>
        <p>Address: 2120 18th St NW BSMT, Washington, DC 20009 </p>
      </li>
      <li>
        <a href="https://stickyfingersdiner.com/" target="_blank">
          Sticky Fingers
        </a>
        <p>Address: 406 H St NE, Washington, DC 20002 </p>
      </li>
      <li>
        <a href="https://spacycloud.com/" target="_blank">
          Spacy Cloud
        </a>
        <p>Address: 2309 18th St NW, Washington, DC 20009</p>
      </li>
      <li>
        <a href="https://fruitive.com/" target="_blank">
          Fruitive
        </a>
        <p>Address: 1094 Palmer Alley NW, Washington, DC 20001 </p>
      </li>
      <li>
        <a href="https://www.ilovenuvegan.com/" target="_blank">
          NuVegan Cafe
        </a>
        <p>Address: 2928 Georgia Ave NW, Washington, DC 20001 </p>
      </li>
      <li>
        <a href="https://shouk.com/" target="_blank">
          Shouk
        </a>
        <p>Address: 655 K St NW, Washington, DC 20001</p>
      </li>
    </ul>
  </div>
  )
}

export default WashingtonDC