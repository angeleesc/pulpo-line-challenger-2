import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Productab from "../component/tabs/pproduc-tab/Productab";

export default function SiteLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed w-full top-0">
        <Navbar />
        <Productab />
      </header>

      {children}
    </>
  );
}
