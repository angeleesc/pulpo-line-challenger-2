import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "filled" | "outlined" | "gradient" | "text"
type Color = "primary" | "secondary"| "info"| "success"| "Warning"| "Error" | "Darck"


export interface HtmlButtonInterface
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  color?: Color
  children: ReactNode
  size?: string
}
