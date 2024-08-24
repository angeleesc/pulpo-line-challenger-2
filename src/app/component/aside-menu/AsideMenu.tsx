import React from "react";
import MaterialButton from "../button/material-button/MaterialButton";
import "./aside-menu.css";
import AsideLink from "../links/aside-link/AsideLink";
import Avatar from "../icons/Avatar";
import Dollar from "../icons/Dollar";
import Bell from "../icons/Bell";
import Home from "../icons/Home";
import BookMarkMinus from "../icons/BookMarkMinus";
import RefreshLeft from "../icons/RefreshLeft";
import Note from "../icons/Note";
import Send from "../icons/Send";
import PhoneCall from "../icons/PhoneCall";
import CircleAlert from "../icons/CircleAlert";
import Cart from "../icons/Cart";
import Power from "../icons/Power";

export default function AsideMenu() {
  return (
    <aside className="relative w-full mt-8 mb-4">
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
          <MaterialButton className="mr-2" variant="outlined" color="secondary">
            Recamar premio
          </MaterialButton>
          <MaterialButton className="ml-2" variant="filled" color="primary">
          Recargar Saldo
          </MaterialButton>
        </div>
      </div>

      <div className="mt-4 w-full max-w-[330px] bg-white drop-shadow-md rounded-xl p-4 pb-0">
        <div className={`aside-menu`}>
          <h3>Titulo de la seccion</h3>
          <ul className="mt-4 ml-1">
            <AsideLink href={"/login"} icon={<Avatar />}>
              Mis Datos Personales
            </AsideLink>
            <AsideLink href={"/login"} icon={<Dollar />}>
              Datos Bancarios
            </AsideLink>
            <AsideLink href={"/login"} icon={<Home />}>
              Direciones
            </AsideLink>
            <AsideLink href={"/login"} icon={<Bell />}>
              Mis Notificaciones
            </AsideLink>
          </ul>

          <h3 className="mt-4">Historial</h3>

          <ul className="mt-4 ml-1">
            <AsideLink href={"/login"} icon={<BookMarkMinus />}>
              Mis apuntes
            </AsideLink>
            <AsideLink href={"/login"} icon={<RefreshLeft />}>
              Mis Renovaciones
            </AsideLink>
            <AsideLink href={"/login"} icon={<Note />}>
              Mis Movimiento
            </AsideLink>
            <AsideLink href={"/login"} icon={<Send />}>
              Mis Envios
            </AsideLink>
          </ul>

          <h3 className="mt-4">Ayuda y contacto</h3>
          <ul className="mt-4 ml-1">
            <AsideLink href={"/login"} icon={<CircleAlert />}>
              Pregunctas Frecuentes
            </AsideLink>
            <AsideLink href={"/login"} icon={<Cart />}>
              Nuestros Productos
            </AsideLink>
            <AsideLink href={"/login"} icon={<PhoneCall />}>
              Contacto
            </AsideLink>
      
          </ul>
          <ul className="mt-4 flex  justify-center">

          <AsideLink  href={"/login"} icon={<Power />}>
              Cerrar Seccion
            </AsideLink>

          </ul>
        </div>

      </div>
    </aside>
  );
}
