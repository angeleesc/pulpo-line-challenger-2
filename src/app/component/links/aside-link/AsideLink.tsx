import Link, { LinkProps } from "next/link";
import React from "react";
import LinkTypeProps from "@/types/LinkTypes";




export default function AsideLink({ children, ...rest}: LinkTypeProps) {
  return <Link {...rest}>{children}</Link>;
}
