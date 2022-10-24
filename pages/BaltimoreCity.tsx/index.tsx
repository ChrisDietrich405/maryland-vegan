import React from 'react'
import data from "../../db.json"

const BaltimoreCity = () => {
  console.log(data)
  return (
    <div className="container">
        <ul className="inner_container">
           {data.baltimorecity.map((restaurant) => {
            return (
              <>
              <h3>{restaurant.name}</h3>
              <p>{restaurant.address}</p>
              <p>{restaurant.url}</p>
              </>
            )
           })}
            {/* <li>
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
                src={"/GANGSTER_VEGAN.webp"}
                alt="GANGSTER_VEGAN.png"
                style={{ width: "84px", height: "66px", objectFit: "contain" }}
              />
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
              <p>
                Address: 1301 North Broadway, Baltimore, Maryland, USA, 21213
              </p>
            </li>
            <li>
              <a
                href="https://www.matthewkenneycuisine.com/liora"
                target="_blank"
              >
                Liora
              </a>
              <p>
                Address: The "Charm'tastic Mile, 414 Light St, Baltimore, MD
                21202
              </p>
            </li>
            <li>
              <a href="https://mymamasvegan.com/" target="_blank">
                My Mama's Vegan
              </a>
              <p>Address: 2915 Greenmount Ave, Baltimore, Maryland</p>
            </li>
            <li>
              <a href="http://www.ilovenuvegan.com/" target="_blank">
                NuVegan Cafe
              </a>
              <p>Address: 3105 St Paul St, Baltimore, MD</p>
            </li>
            <li>
              <a href="https://www.refocusedvegan.com/" target="_blank">
                Refocused
              </a>
              <p>Address: 429 N Eutaw St #1N, Baltimore, MD</p>
            </li>
            <li>
              <a href="https://www.sproutvegan2.com/" target="_blank">
                Sprout Vegan 2.0
              </a>
              <p>Address: 101 N Wolfe St suite 4, Baltimore, MD</p>
            </li>
            <li>
              <a href="http://stemfarmkitchen.com/" target="_blank">
                Stem Farm and Kitchen
              </a>
              <p>
                Address: 301 W 29th St (at R. House food hall), Baltimore,
                Maryland
              </p>
            </li>
            <li>
              <a href="https://www.greenhousejuicecafe.com/" target="_blank">
                Green House Juice Cafe
              </a>
              <p>Address: 725 N Wolfe St. Baltimore, MD</p>
            </li>
            */}
           </ul>
          
     </div>
   )
 }

 export default BaltimoreCity 