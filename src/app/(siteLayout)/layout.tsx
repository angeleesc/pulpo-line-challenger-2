import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Productab from "../component/tabs/pproduc-tab/Productab";
import AsideMenu from "../component/aside-menu/AsideMenu";
import Footer from "../component/footer/Footer";

export default function SiteLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed w-full top-0 z-[900]">
        <Navbar />
        <Productab />
      </header>
      <img
        src={"/circle.svg"}
        alt="mani-bg"
        className="fixed z-[-10] right-[-300px] w-[600px] h-[600px] top-0"
      />
      <div className="mt-[160px] w-full flex items-start">
        <div className="w-4/6">{children}</div>
        <div className="w-2/6">
          <AsideMenu />
        </div>
      </div>
      <Footer />
    </>
  );
}
