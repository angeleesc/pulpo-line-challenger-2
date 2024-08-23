import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Productab from "../component/tabs/pproduc-tab/Productab";
import Image from "next/image";

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


        <img src={"/circle.svg"} alt="mani-bg" className="fixed right-[-300px] w-[600px] h-[600px] top-0" />

      

      {children}
    </>
  );
}
