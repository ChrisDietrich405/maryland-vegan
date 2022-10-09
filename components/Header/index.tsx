import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.inner_container}>
        <Image src="/logo.png" width={123} height={77} />
        <nav className={styles.nav_container}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/Restaurants">Restaurants</Link>
            </li>
            <li>
              <Link href="/Resources">Resources</Link>
            </li>
            <li>
              <Link href="/Calendar">Calendar</Link>
              {/* calendar is a component or page it's a component but how do I make a page from that */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
