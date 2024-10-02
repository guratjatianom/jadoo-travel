import React from 'react'

    interface TextProps {
    children: React.ReactNode
    className?: string
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
    fontFamily?: 'volkhov' | 'poppins'
    }

    const Text: React.FC<TextProps> = ({
    children,
    className = '',
    size = 'p',
    fontFamily = 'poppins',
    }) => {

    const sizeClasses = {
        h1: 'text-[84px] leading-[89px] font-bold',
        h2: 'text-[50px] leading-[64px]',
        h3: 'text-[44px] leading-[60px]',
        h4: 'text-[33px] leading-[54px]',
        h5: 'text-[20px] leading-[30px]',
        h6: 'text-[18px]',
        p: 'text-[16px]',
    }

    const fontFamilyClasses = {
        volkhov: 'var(--font-volkhov)',
        poppins: 'var(--font-poppins)',
    }

    const combinedClasses = [
        sizeClasses[size],
        fontFamilyClasses[fontFamily],
        className
    ].filter(Boolean).join(' ')

    const Component = size as keyof JSX.IntrinsicElements

    return <Component className={combinedClasses}>{children}</Component>
    }

    export default Text