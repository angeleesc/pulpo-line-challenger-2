import ArrowwRight from "@/app/component/icons/UI-icons/ArrowwRight";
import CircleCheck from "@/app/component/icons/UI-icons/CircleCheck";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-16">
      <div className=" w-full">
        <div className="">
          <div className="flex items-center">
            <span
              className={`
            [&_path]:stroke-success-default
              [&_svg]:stroke-success-default
              [&_circle]:stroke-success-default
              mr-4
            `}
            >
              <CircleCheck />
            </span>
            <h3 className="text-[24px] leading-9 font-bold">¡Saldo Añadido!</h3>
          </div>
          <p className="text-[15px] my-4 inline-block leading-5 font-medium">
            Tu saldo ya está añadido y puedes usarlo para realizar tus compras.
            ¿Listo para ganar?
          </p>
        </div>
        <div className="w-full my-4 flex justify-center items-center shadow-sm bg-white rounded-lg p-4">
          <div>
            <h3 className="text-[17px] leading-[25px] font-medium">10.00 €</h3>
            <p className="leadind-[20] text-[14px]">Antes</p>
          </div>
          <div className="m-8 [&_path]:st">
            <ArrowwRight />
          </div>
          <div>
            <h3 className="font-bold text-[25px] leading-[36px] text-success-default">
              20.00 €
            </h3>
            <p>Ahora</p>
          </div>
        </div>

        <div className="mt-4 flex justify-center lg:justify-end">
          <Link
            href={"/"}
            className="w-full max-w-[200px]   text-center font-semibold font-montserrat text-white bg-primary-default rounded p-3 disabled:opacity-50 disabled:text-body-90"
          >
            Volver al inicion
          </Link>
        </div>
      </div>
    </div>
  );
}
