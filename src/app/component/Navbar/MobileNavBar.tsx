import React from "react";
import ArrowLeft from "../icons/UI-icons/ArrowLeft";
import User from "../icons/UI-icons/User";
import Cart from "../icons/UI-icons/Cart";
import Close from "../icons/UI-icons/Close";

export default function MobileNavBar() {
  return (
    <nav className="bg-primary-default w-full h-16 flex items-center justify-between px-4">
      <div className="flex font-bold text-white">
        <span className="[&_svg]:stroke-white [&_path]:stroke-white">
          <ArrowLeft />
        </span>
        <h2>Gestion de saldo</h2>
      </div>
      <div></div>
      <div className="flex items-center">
        <div className="flex flex-col items-center mx-1 [&_svg]:stroke-white [&_path]:stroke-white">
          <User />
          <p
            className={`
            text-white
            text-[12px]
            `}
          >
            0,03€
          </p>
        </div>
        <div className="flex flex-col items-center mx-1  [&_svg]:stroke-white [&_path]:stroke-white [&_svg]:w-[30px] [&_svg]:h-[24px]]">
          <Cart h={"24"} w={"24"} />
        </div>
        <div className="flex flex-col items-center mx-1  [&_svg]:stroke-white [&_path]:stroke-white [&_svg]:w-[30px] [&_svg]:h-[24px]]">
          <Close />
        </div>
      </div>
    </nav>
  );
}
