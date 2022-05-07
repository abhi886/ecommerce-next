import { FC, ReactNode } from "react";
import s from "./Layout.module.css";
import { Footer } from "@components/common";

function Layout({ children }) {
  return (
    <div className={s.root}>
      <main className='fit'>{children}</main>
      <Footer></Footer>
    </div>
  );
}
export default Layout;
