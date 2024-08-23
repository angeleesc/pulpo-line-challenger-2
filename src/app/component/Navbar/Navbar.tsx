import React from "react";
import Logo from "../icons/Logo";
import Link from "next/link";
import User from "../icons/User";
import ShoppingCart from "../icons/ShoppingCart";

export default function Navbar() {
  return (
    <nav className="bg-primary w-full h-16 flex items-center px-4">
      <div className="mx-4 m">
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
          <Link href={"/"} className="pc-nav-link">
            Inicio
          </Link>
        </li>
        <li>
          <Link href={"/"} className="pc-nav-link">
            Resulltado y botes
          </Link>
        </li>
        <li>
          <Link href={"/"} className="pc-nav-link">
            Quienes Somos
          </Link>
        </li>
        <li>
          <Link href={"/"} className="pc-nav-link">
            Ayuda
          </Link>
        </li>
      </ul>
      <div className="flex items-center">
        <div className="flex flex-col items-center mx-4">
          <User />
          <p
            className={`
            text-white
            text-[16px]
            `}
          >
            0,03€
          </p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
}
