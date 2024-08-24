import React from "react";
import LogoDevTalenti from "../icons/LogoDevTalenti";
import FooterLin from "../links/footer-link/FooterLin";

export default function Footer() {
  return (
    <footer className="mt-8 bg-body-100 p-4 flex flex-wrap">
      <div className="h-full flex-grow">
        <LogoDevTalenti />
      </div>
      <div className="flex-grow flex">
       <div className="footer-secctions">
       <ul className="flex-grow footer-list">
            <FooterLin href={"/"}> </FooterLin>


        </ul>
       </div>
    
        
      </div>
    </footer>
  );
}
