import React, { ReactNode } from "react";
import Header from "../Header";
import "./Container.css";
interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default Container;
