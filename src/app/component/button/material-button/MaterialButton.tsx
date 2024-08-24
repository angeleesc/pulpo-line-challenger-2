import { HtmlButtonInterface } from "@/types/HtmlButtonElementType";
import React, { useMemo } from "react";
import "./material/button.css"

/* type Variant = "filled" | "outlined" | "gradient" | "text" */
/* type Color = "primary" | "secondary"| "info"| "success"| "Warning"| "Error" | "Darck" */

export default function MaterialButton({
  children,
  className,
  size,
  variant,
  color,
  ...rest
}: HtmlButtonInterface) {


    const classConfig = useMemo(()=>{
        if(!variant && !color){
            // console.log("no tiene variable a color")
             return " bg-orange-900 text-white"
        }

        if(variant && !color){
            //  console.log("tienes variante pero no tienes color")
            if(variant ==="filled") return " bg-orange-900 text-white"
            if(variant ==="outlined") return "border bordeer-orange-900 text-orange-900"
        
        }

        // console.log("tienes variante y color")
        return `${variant}-${color}`

    },[])
   

  return <button 
  className={`button ${classConfig} ${className || ""}`}
  {...rest}
  >{children}</button>;
}
