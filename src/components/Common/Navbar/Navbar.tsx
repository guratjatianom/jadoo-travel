import React from "react";
import Image from "next/image";
import Jadoo from "@/assets/Hero/jadoo.svg";
import { PaddingContainer, Text } from "@/components/Common"

export default function Navbar() {
    return (
        <div className="fixed">
            <PaddingContainer>
                <div className="flex w-[1160px] mt-[47px] text-center justify-between items-center">
                    <Image src={Jadoo} alt="logo" />
                    <div className="flex text-[#212832] font-[400] items-center justify-center text-center">
                        <Text size="p" className="pl-[86px]">Desitnations</Text>
                        <Text size="p" className="pl-[86px]">Hotels</Text>
                        <Text size="p" className="pl-[86px]">Flights</Text>
                        <Text size="p" className="pl-[86px]">Bookings</Text>
                        <Text size="p" className="pl-[86px]">Login</Text>
                        <div className="pl-[52px]">
                            <Text 
                                size="p" 
                                className="border border-[#212832] rounded-lg px-5 py-2"
                            >
                                Sign up
                            </Text>
                        </div>
                        <Text size="p" className="pl-[42px]">EN</Text>
                    </div>
                </div>
            </PaddingContainer>
        </div>
    )
}