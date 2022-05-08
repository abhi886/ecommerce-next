import { FC, ReactNode } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
import { CartSidebar } from "@components/cart"
import { Sidebar } from "@components/ui"
import {useUI} from "@components/ui/context"



function Layout({ children }) {
  const ui = useUI();
  console.log(ui);
  return (
    <div className={s.root}>
      <Navbar />
      <Sidebar>
        <CartSidebar />
      </Sidebar>
      <main className='fit'>{children}</main>
      <Footer></Footer>
    </div>
  );
}
export default Layout;
