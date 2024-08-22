import React from "react";
import Navbar from "../component/Navbar/Navbar";

export default function SiteLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Navbar />
      </header>

      {children}
    </>
  );
}
