import { LinkProps } from "next/link";
import { ReactNode } from "react";

interface LinkTypeProps extends LinkProps {
    children: ReactNode
}

export default LinkTypeProps