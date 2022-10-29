import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const [divHeight, setDivHeight] = useState<number>(0);

  useEffect(() => {
    if (showLinks) {
      const linksHeight =
        linksRef?.current?.getBoundingClientRect().height || 0;
      setDivHeight(linksHeight);
    } else {
      setDivHeight(0);
    }
  }, [showLinks]);

  return (
    <nav className={styles.navbar_container}>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <Image src="/logo.png" width={123} height={77} />
          <button
            className={styles.nav_toggle}
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className={styles.links_container} style={{ height: `${divHeight}px` }}>
          <ul className={styles.links} ref={linksRef}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Restaurants">Restaurants</Link>
            </li>
            <li>
              <Link href="/Resources">Resources</Link>
            </li>
            <li>
              <Link href="/Calendar">Calendar</Link>
            
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
