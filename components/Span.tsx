import React, { FC, ReactNode } from "react";
import { Text } from "@nextui-org/react";

interface SpanProps {
    children: any;
    icon?: string | ReactNode;
    className?: string;
}

const Span: FC<SpanProps> = ({ children, icon, className}) => {
    if(!children) return <></>;
    return <span className={className + "mx-3"}>{icon} {children}</span>
}

export default Span;