import React from "react";
import Home from "../icons/UI-icons/Home";
import Globe from "../icons/UI-icons/Globe";
import Help from "../icons/UI-icons/Help";

export default function FooterNavbar() {
  return (
    <nav className={`
    w-full shadow-md bg-white h-[60px] flex justify-between
    [&_path]:stroke-body-60
    [&_svg]:stroke-body-60
    [&_circle]:stroke-body-
    
    [&_p]:font-medium
    [&_p]:text-[14px]
    [&_p]:leading-5
    [&_p]:text-body-60

    `}>
      <div className="flex-grow flex-shrink flex flex-col justify-center items-center">
        
          <Home />
          <p>inicio</p>
        
      </div>
      <div className="flex-grow flex-shrink flex flex-col justify-center items-center">
        <Globe/>
        <p>Resultaods</p>
      </div>
      <div className="flex-grow flex-shrink flex flex-col justify-center items-center">
        <Help/>
        <p>Ayuda</p>

      </div>
    </nav>
  );
}
