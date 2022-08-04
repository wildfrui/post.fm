import React from "react";
import Link from "next/link";

import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import styles from "./AsideMenu.module.css";
import { IconButton } from "@mui/material";

const endpoints = [
  {
    text: "Свежее",
    icon: <WhatshotOutlinedIcon></WhatshotOutlinedIcon>,
    href: "/feed",
  },
  {
    text: "Профиль",
    icon: <PersonPinCircleOutlinedIcon></PersonPinCircleOutlinedIcon>,
    href: "/profile",
  },
  {
    text: "Создать",
    icon: <ReplyOutlinedIcon></ReplyOutlinedIcon>,
    href: "/create",
  },
  {
    text: "Закладки",
    icon: <GradeOutlinedIcon></GradeOutlinedIcon>,
    href: "/favorites",
  },
  {
    text: "Сообщения",
    icon: <SendOutlinedIcon></SendOutlinedIcon>,
    href: "/messages",
  },
];

const AsideMenu = () => {
  const paths = endpoints.map(({ text, icon, href }) => {
    return (
      <Link href={href}>
        <div className={styles.link}>
          {icon}
          <a className={styles.text}>{text}</a>
        </div>
      </Link>
    );
  });
  return (
    <aside>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          {/* <li className={styles.menu__link}>about</li>
            <li className={styles.menu__link}>profile</li>
            <li className={styles.menu__link}>thoughts</li>
            <li className={styles.menu__link}>messages</li> */}
          {paths}
        </ul>
      </nav>
    </aside>
  );
};

export default AsideMenu;
