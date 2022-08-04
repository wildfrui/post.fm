import React from "react";
import SearchBar from "../SearchBar";
import Link from "next/link";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.left}>
          <MenuIcon></MenuIcon>
          <p className={styles.header__logo}>
            re.<span>fm</span>{" "}
          </p>
        </div>
        <div className={styles.middle}>
          <SearchBar></SearchBar>
          <Button
            startIcon={<AddIcon></AddIcon>}
            classes={{ root: styles.add }}
          >
            Создать
          </Button>
        </div>
        <div className={styles.right}>
          <Button startIcon={<PersonIcon></PersonIcon>}></Button>
          <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
        </div>
      </header>
    </div>
  );
};

export default Header;
