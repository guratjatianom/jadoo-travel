"use client";
import React, { useState } from "react";
import Image from "next/image";
import Jadoo from "@/assets/Hero/jadoo.svg";
import { Text, Dropdown } from "@/components/Common";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative top-0 left-0 right-0 z-20">
            <div className="flex w-[300px] md:w-[1160px] mt-[47px] text-center justify-between items-center mx-auto">
                <Image src={Jadoo} alt="logo" />
                <div className="hidden md:flex text-[#212832] gap-8 text-bold font-[400] items-center justify-center text-center">
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
                <div
                    className={`fixed top-0 left-0 h-full w-full bg-white z-30 transform ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    } transition-transform duration-300 ease-in-out`}
                >
                    <div className="flex items-center text-center justify-between gap-8 mt-[47px] mx-auto w-[300px]">
                        <Image src={Jadoo} alt="logo" className="h-8" />
                        <button onClick={toggleMenu}>
                            <AiOutlineClose size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col items-center justify-center h-full space-y-6">
                        <Text size="p" className="cursor-pointer mb-4">Destinations</Text>
                        <Text size="p" className="cursor-pointer mb-4">Hotels</Text>
                        <Text size="p" className="cursor-pointer mb-4">Flights</Text>
                        <Text size="p" className="cursor-pointer mb-4">Bookings</Text>
                        <Text size="p" className="cursor-pointer mb-4">Login</Text>
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
                </div>
            )}
        </div>
    );
}
