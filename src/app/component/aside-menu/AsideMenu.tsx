import Link from "next/link";
import React from "react";

export default function AsideMenu() {
  return (
    <aside className="  relative w-full mt-8 px-4">
      <div className="p-4 w-full max-w-[330px] drop-shadow-md bg-white rounded-xl">
        <div className="flex  justify-between items-center">
          <h2 className="text-base font-bold mx-1">{"Angel Sanchez"}</h2>

          <div className="h-[25px] flex items-center bg-Warning-default rounded-sm">
            <h2 className="text-[12.5px] leading-[16px] font-semibold px-2 py1">
              Saldo : {"300,00 €"}
            </h2>
          </div>
        </div>
        <div className="flex mt-6 w-full justify-between items-center ">
          <Link href={"/"} className=" text-[15px] font-montserrat font-semibold text-white rounded mr-1 p-2 w-1/2 text-center bg-primary-default" >
            reclamar premio
          </Link>
          <Link href={"/"} className=" text-[15px] font-montserrat font-semibold text-white rounded ml-1 p-2 w-1/2 text-center bg-primary-default" >
            Recargar saldo
          </Link>
        </div>
      </div>
    </aside>
  );
}
