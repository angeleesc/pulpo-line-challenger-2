import LinkTypeProps from "@/types/LinkTypes";
import Link from "next/link";
import React from "react";

export default function FooterLink({ children, ...rest }: LinkTypeProps) {
  return (
    <li className="w-full">
      <Link className="footer-link" {...rest}>
        {children}
      </Link>
    </li>
  );
}

export function FooterLogoLink({ children, ...rest }: LinkTypeProps) {
  return (
    <li className="mx-2 my-1 inline-block">
      <Link className="footer-logo" {...rest}>
        {children}
      </Link>
    </li>
  );
}
