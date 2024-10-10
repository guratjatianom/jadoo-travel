"use client";
import React, { useState } from "react";
import Image from "next/image";
import Jadoo from "@/assets/Hero/jadoo.svg";
import { Text, Dropdown } from "@/components/Common";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menggunakan icon hamburger dan close

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative top-0 left-0 right-0 z-20">
            <div className="flex w-[300px] md:w-[1160px] mt-[47px] text-center justify-between items-center">
                <Image src={Jadoo} alt="logo" />
                <div className="hidden md:flex text-[#212832] gap-12 text-bold font-[400] items-center justify-center text-center">
                    <Text size="p" className="cursor-pointer">Destinations</Text>
                    <Text size="p" className="cursor-pointer">Hotels</Text>
                    <Text size="p" className="cursor-pointer">Flights</Text>
                    <Text size="p" className="cursor-pointer">Bookings</Text>
                    <Text size="p" className="cursor-pointer">Login</Text>
                    <div>
                        <Text
                            size="p"
                            className="border border-[#212832] rounded-[5px] px-5 py-2 cursor-pointer"
                        >
                            Sign up
                        </Text>
                    </div>
                    <Dropdown />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="flex flex-col items-center md:hidden mt-4">
                    <Text size="p" className="cursor-pointer">Destinations</Text>
                    <Text size="p" className="cursor-pointer">Hotels</Text>
                    <Text size="p" className="cursor-pointer">Flights</Text>
                    <Text size="p" className="cursor-pointer">Bookings</Text>
                    <Text size="p" className="cursor-pointer">Login</Text>
                    <div>
                        <Text
                            size="p"
                            className="border border-[#212832] rounded-[5px] px-5 py-2 cursor-pointer"
                        >
                            Sign up
                        </Text>
                    </div>
                    <Dropdown />
                </div>
            )}
        </div>
    );
}
