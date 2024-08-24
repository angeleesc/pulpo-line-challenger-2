import { HtmlButtonInterface } from "@/types/HtmlButtonElementType";
import React from "react";
import "./material/button.css"

export default function MaterialButton({
  children,
  className,
  size,
  variant,
  color,
  ...rest
}: HtmlButtonInterface) {




  return <button 
  className={`button`}
  {...rest}
  >{children}</button>;
}
