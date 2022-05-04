import { FC, ReactNode } from "react";
import s from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={s.root}>
      <main className='fit'>{children}</main>
    </div>
  );
}
export default Layout;
