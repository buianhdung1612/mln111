import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

export const Layout = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-1 mr-[93px]">
          <Header />
          <Outlet />
        </div>
        <Sidebar />
      </div>
      <ScrollToTopButton />
    </>
  );
};
