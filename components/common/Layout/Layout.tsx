import { FC, ReactNode } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";

function Layout({ children }) {
  return (
    <div className={s.root}>
      <Navbar />
      <main className='fit'>{children}</main>
      <Footer></Footer>
    </div>
  );
}
export default Layout;
