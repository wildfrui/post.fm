import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const endpoints = [
  {
    text: "Create a post",
    href: "/create",
  },
  {
    text: "Profile",
    href: "/profile",
  },
  {
    text: "Thoughts",
    href: "/thoughts",
  },
  {
    text: "Messages",
    href: "/messages",
  },
];

const Header = () => {
  const paths = endpoints.map(({ text, href }) => {
    return (
      <Link href={href}>
        <a className={styles.menu__link}>{text}</a>
      </Link>
    );
  });
  return (
    <div>
      <header className={styles.header}>
        <p className={styles.header__logo}>
          Post.<span>fm</span>{" "}
        </p>
        <nav className={styles.header__menu && styles.menu}>
          <ul className={styles.menu__list}>
            {/* <li className={styles.menu__link}>about</li>
            <li className={styles.menu__link}>profile</li>
            <li className={styles.menu__link}>thoughts</li>
            <li className={styles.menu__link}>messages</li> */}
            {paths}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
