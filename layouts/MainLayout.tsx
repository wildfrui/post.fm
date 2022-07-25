import React from "react";
import Header from "../components/Header";

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
      <div>{children}</div>
    </div>
  );
};
