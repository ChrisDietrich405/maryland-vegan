import React from "react";
import Link from "next/link";

const restaurants = () => {
  return (
    <>
      <h1>
        Find your closest vegan restaurant or maybe instead...ROAD TRIP!!!!
      </h1>
      <div>
        <h3>Baltimore City</h3>
        <Link href="https://landofkush.com/" target="_blank">Land Of Kush</Link>
        <Link href="https://www.thegreenerkitchen.com/?fbclid=IwAR1-M9QZk0iM2nCtgZYuqDlWtVTDKpK5LDFvLd4-NbPvVpd1tA2LIgo9tkw" target="_blank">
          The Greener Kitchen
        </Link>
        <Link href="https://dodahskitchen.com/" target="_blank" >Dodah's Kitchen</Link>
        <Link href="https://www.matthewkenneycuisine.com/double-zero-baltimorehttps://www.matthewkenneycuisine.com/double-zero-baltimore" target="_blank" >Double Zero</Link>
        <Link href="https://www.gangstervegan.com/" target="_blank" >Gangster Vegan</Link>
        <Link href="https://dodahskitchen.com/" target="_blank" >Dodah's Kitchen</Link>
        <Link href="https://dodahskitchen.com/" target="_blank" >Dodah's Kitchen</Link>
      </div>
    </>
  );
};

export default restaurants;
