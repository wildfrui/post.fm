import React from "react";
import Header from "../../components/Header";
import AsideMenu from "../../components/AsideMenu";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: React.ReactElement;
  hideComments?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  hideComments,
}) => {
  return (
    <div>
      <Header></Header>
      <div className={styles.layout__page}>
        <AsideMenu></AsideMenu>
        <div>{children}</div>
      </div>
    </div>
  );
};
