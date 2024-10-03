import React from "react";
import Image from "next/image";
import Jadoo from "@/assets/Hero/jadoo.svg";
import { Text, Dropdown } from "@/components/Common";

export default function Navbar() {
    return (
        <div className="relative top-0 left-0 right-0 z-20">
            <div className="flex w-[1160px] mt-[47px] text-center justify-between items-center">
                <Image src={Jadoo} alt="logo" />
                <div className="flex text-[#212832] gap-12 text-bold font-[400] items-center justify-center text-center">
                    <Text size="p" className=" cursor-pointer">Desitnations</Text>
                    <Text size="p" className=" cursor-pointer">Hotels</Text>
                    <Text size="p" className=" cursor-pointer">Flights</Text>
                    <Text size="p" className=" cursor-pointer">Bookings</Text>
                    <Text size="p" className=" cursor-pointer">Login</Text>
                    <div className="">
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
        </div>
    )
}