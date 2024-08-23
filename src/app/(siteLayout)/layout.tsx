import React from "react";
import Navbar from "../component/Navbar/Navbar";

export default function SiteLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed top-0">
        <Navbar />
      </header>

      {children}
    </>
  );
}
