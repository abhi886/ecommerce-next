import { FC, ReactNode } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
import { CartSidebar } from "@components/cart";
import { Sidebar } from "@components/ui";
import { useUI } from "@components/ui/context";
import { ApiProvider } from "@common";

function Layout({ children }) {
  const { isSidebarOpen, closeSidebar } = useUI();
  return (
    <ApiProvider>
      <div className={s.root}>
        <Navbar />
        <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
          <CartSidebar />
        </Sidebar>
        <main className='fit'>{children}</main>
        <Footer></Footer>
      </div>
    </ApiProvider>
  );
}
export default Layout;
