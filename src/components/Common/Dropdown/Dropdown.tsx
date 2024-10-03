"use client";
import React, { useState } from "react";
import Image from "next/image";
import DroopdownIcon from "@/assets/Hero/dropdown.svg";
import { Text } from "@/components/Common";

export default function Droopdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative flex">
            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                <Text size="p" className="pr-[6px]">EN</Text>
                <Image src={DroopdownIcon} alt="dropdown" />
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-4 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <ul className="py-1">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">EN</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">ID</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
