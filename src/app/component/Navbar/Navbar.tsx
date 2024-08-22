import React from "react";
import Logo from "../icons/Logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary w-full h-16 flex items-center px-8">
      <div className="mr-8">
        <Logo />
      </div>
      <ul
        className={`
        grow
        flex
        items-center
        justify-start
        h-9
        px-8
        border-s

        `}
      >
        <li>
          <Link href={"/"} className="pc-nav-link" >Inicio</Link>
        </li>
        <li>
          <Link href={"/"} className="pc-nav-link" >Resulltado y botes</Link>
        </li>
        <li>
          <Link href={"/"} className="pc-nav-link" >Quienes Somos</Link>
        </li>
        <li>
          <Link href={"/"} className="pc-nav-link" >Ayuda</Link>
        </li>
      </ul>
      <div className="ml-8"></div>
    </nav>
  );
}
