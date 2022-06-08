import React, { ReactNode } from "react";
import Header from "./Header";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default MainContainer;
