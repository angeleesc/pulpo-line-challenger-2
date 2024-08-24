import React from "react";
import LogoDevTalenti from "../icons/LogoDevTalenti";
import FooterLink from "../links/footer-link/FooterLink";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="mt-8 bg-body-100 p-4 flex flex-wrap">
      <div className="h-full flex-grow min-w-[300px]">
        <LogoDevTalenti />
      </div>
      <div className="flex-grow min-w-[300px]">
        <div className="footer-secctions">
          <h3>Link de interes</h3>
          <div className="flex">
            <ul className="flex-grow footer-list mr-2">
              <FooterLink href={"/"}>Quienes Somos </FooterLink>
              <FooterLink href={"/"}>Pregunta Frecuente</FooterLink>
              <FooterLink href={"/"}>Premios Repartido</FooterLink>
            </ul>
            <ul className="flex-grow footer-list">
              <FooterLink href={"/"}>Ayuda</FooterLink>
              <FooterLink href={"/"}>blog</FooterLink>
              <FooterLink href={"/"}>Mapa Web</FooterLink>
            </ul>
          </div>
        </div>
        <div className="footer-secctions mt-4">
            <h3>Otros Link</h3>
            <ul className="footer-list">
                <FooterLink href={"/"}>Compra Loteria De Navidad</FooterLink>
                <FooterLink href={"/"}>Compra Loteria Del Niño</FooterLink>
                <FooterLink href={"/"}>Compra Loteria</FooterLink>
                <FooterLink href={"/"}>Compra Loteria</FooterLink>
                <FooterLink href={"/"}>Compra Loteria</FooterLink>
                <FooterLink href={"/"}>Compra Loteria</FooterLink>

            </ul>
        </div>
      </div>
    </footer>
  );
}
