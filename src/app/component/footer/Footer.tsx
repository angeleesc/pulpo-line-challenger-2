import React from "react";
import LogoDevTalenti from "../icons/logos/LogoDevTalenti";
import FooterLink, { FooterLogoLink } from "../links/footer-link/FooterLink";
import "./footer.scss";
import ConfianzaOnline from "../icons/logos/ConfianzaOnline";
import JUegosResponsable18 from "../icons/logos/JUegosResponsable18";
import Visa from "../icons/logos/Visa";
import Maestro from "../icons/logos/Maestro";
import Telepago from "../icons/logos/Telepago";
import ServiRed from "../icons/logos/ServiRed";
import MasterCard from "../icons/logos/MasterCard";
import Bizun from "../icons/logos/Bizun";
import LaCaixa from "../icons/logos/LaCaixa";
import BBVa from "../icons/logos/BBVa";
import Stantader from "../icons/logos/Stantader";
import Sabadell from "../icons/logos/Sabadell";
import Facebook from "../icons/logos/Facebook";
import Twiter from "../icons/logos/Twiter";
import Instagram from "../icons/logos/Instagram";

export default function Footer() {
  return (
    <footer className="mt-8 bg-body-100 p-8 flex flex-wrap justify-between">
      <div className="h-full flex-grow min-w-[200px] max-w-[320px]">
        <LogoDevTalenti />
      </div>
      <div className="flex-grow min-w-[200px] max-w-[320px]">
        <div className="footer-secctions mt-4">
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
            <FooterLink href={"/"}>Loteria De Navidad</FooterLink>
            <FooterLink href={"/"}>Bote XX Millones Euromillones</FooterLink>
            <FooterLink href={"/"}>Loteria Sorteo Especial</FooterLink>
            <FooterLink href={"/"}>Loteria Jueves y Sabado</FooterLink>
          </ul>
        </div>
      </div>
      <div className="flex-grow min-w-[200px] max-w-[320px]">
        <div className="footer-secctions mt-4">
          <h3>Confianza y Seguridad</h3>
          <h4 className="mt-4 mb-2">Sellos de Confianza</h4>
          <ul className="footer-list w-full flex flex-wrap">
            <FooterLogoLink href={"/"}>
              <ConfianzaOnline />
            </FooterLogoLink>
            <FooterLogoLink href={"/"}>
              <JUegosResponsable18 />
            </FooterLogoLink>
          </ul>

          <h4 className="mt-4 mb-2">Metodos De Pago</h4>
          <ul className=" footer-list w-full flex flex-wrap max-w-[500px]">
            <FooterLogoLink href={"/"}>
              <Visa />
            </FooterLogoLink>
            <FooterLogoLink href={"/"}>
              <Maestro />
            </FooterLogoLink>
            <FooterLogoLink href={"/"}>
              <MasterCard />
            </FooterLogoLink>
            <FooterLogoLink href={"/"}>
              <Telepago />
            </FooterLogoLink>
            <FooterLogoLink href={"/"}>
              <ServiRed />
            </FooterLogoLink>
            <FooterLogoLink href={"/"}>
              <Bizun />
            </FooterLogoLink>
            <FooterLogoLink href={"/"}>
              <LaCaixa />
            </FooterLogoLink>
            <FooterLogoLink href={"/"}>
              <BBVa />
            </FooterLogoLink>
            <FooterLogoLink href={"/"}>
              <Stantader />
            </FooterLogoLink>
            <FooterLogoLink href={"/"}>
              <Sabadell />
            </FooterLogoLink>
          </ul>
        </div>
      </div>
      <div className="flex-grow min-w-[200px] max-w-[320px]">
        <div className="footer-secctions mt-4">
          <h3>Texto Legales</h3>
          <ul className="footer-list w-full flex flex-wrap">
            <FooterLink href={"/"}>Condiciones Generales</FooterLink>
            <FooterLink href={"/"}>Politicas De Privacidad</FooterLink>
            <FooterLink href={"/"}>Politicas De Cookies</FooterLink>
          </ul>
        </div>
        <div className="footer-secctions mt-4">
          <h3>Contacto</h3>
          <ul className="footer-list w-full">
            <FooterLink href={"/"}>hello@deltalenty.com</FooterLink>
          </ul>
          <p className="inline-block my-2">+506 124 356 789</p>
          <ul className="footer-list w-full mb-2">
            <FooterLink href={"/"}>Chat</FooterLink>
          </ul>
          <p>De lunes a viernes de 9:00h a 19:00h</p>
          <div className="flex items-center">
            <p>Siguenos en </p>{" "}
            <ul className="flex">
              <FooterLogoLink href={"/"}>
                <Facebook />
              </FooterLogoLink>
              <FooterLogoLink href={"/"}>
                <Instagram />
              </FooterLogoLink>
              <FooterLogoLink href={"/"}>
                <Twiter />
              </FooterLogoLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
