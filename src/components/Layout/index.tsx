import React from "react";
import { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

//Layout component to wrap the other components between header and footer
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
