import React from 'react'
import { poppins, volkhov } from "@/app/fonts/fonts";

interface TextProps {
    children: React.ReactNode;
    className?: string;
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    fontFamily?: "poppins" | "volkhov";
}

const Text: React.FC<TextProps> = ({
    children,
    className = '',
    size = 'p',
    fontFamily = 'poppins',
}) => {

    const sizeClasses = {
        h1: 'text-[32px] leading-[36px] md:text-[84px] md:leading-[89px] font-bold',
        h2: 'text-[28px] leading-[32px] md:text-[50px] md:leading-[64px]',
        h3: 'text-[24px] leading-[28px] md:text-[44px] md:leading-[66px]',
        h4: 'text-[20px] leading-[24px] md:text-[33px] md:leading-[54px]',
        h5: 'text-[18px] leading-[22px] md:text-[20px] md:leading-[30px]',
        h6: 'text-[16px] leading-[20px] md:text-[18px] md:leading-[24px]',
        p: 'text-[14px] leading-[18px] md:text-[16px] md:leading-[22px]',
    };

    const fontFamilyClasses = {
        volkhov: "var(--font-volkhov)",
        poppins: "var(--font-poppins)",
    };

    const combinedClasses = [
        sizeClasses[size],
        fontFamilyClasses[fontFamily],
        fontFamily === "volkhov" ? volkhov.className : poppins.className,
        className
    ]
    .filter(Boolean)
    .join(" ");

    const Component = size as keyof JSX.IntrinsicElements;

    return <Component className={combinedClasses}>{children}</Component>;
};

export default Text;
