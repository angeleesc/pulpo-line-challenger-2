import { HtmlButtonInterface } from "@/types/HtmlButtonElementType";
import React, { useMemo } from "react";
import "./material/button.css"

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
             return " bg-orange-900 text-white"
        }

        if(variant && !color){
             
            if(variant ==="filled") return " bg-orange-900 text-white"
            if(variant ==="outlined") return "border bordeer-orange-900 text-orange-900"
        }

    },[])
   

  return <button 
  className={`button outline-darck`}
  {...rest}
  >{children}</button>;
}
