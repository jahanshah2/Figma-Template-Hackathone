import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, disabled, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={twMerge("border-[#E5E5E5] mt-[40px] h-[40px] rounded-[20px] w-[100%] bg-black text-white", className)}
        >
            {children}
        </button>
    )
}

export default Button
