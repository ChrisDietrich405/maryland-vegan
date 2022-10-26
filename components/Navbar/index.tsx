import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import { links, social } from "../../data";
// import "./styles.css"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const [divHeight, setDivHeight] = useState<number>(0);

  useEffect(() => {
    if (showLinks) {
      const linksHeight = linksRef?.current?.getBoundingClientRect().height || 0;
      setDivHeight(linksHeight);
    } else {
      setDivHeight(0);
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
        <Image src="/logo.png" width={123} height={77} />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" style={{ height: `${divHeight}px` }}>
          <ul className="links" ref={linksRef}>
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
              {/* calendar is a component or page it's a component but how do I make a page from that */}
            </li>
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((icons) => {
            return (
              <li>
                <a href={icons.url}>{icons.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;