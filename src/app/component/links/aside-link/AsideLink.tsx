import Link, { LinkProps } from "next/link";
import React from "react";
import LinkTypeProps from "@/types/LinkTypes";

interface AsideLinkProps extends LinkProps{
    icon: React.ReactNode
    children: React.ReactNode
}

export default function AsideLink({ children, icon,  ...rest }: AsideLinkProps) {
  return (
    <li className="flex h-[37px]" >
      <Link className="aside-link" {...rest}>
        {icon} <span>{children}</span>
      </Link>
    </li>
  );
}
