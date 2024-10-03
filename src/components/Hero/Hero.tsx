import React from "react";
import Image from "next/image";
import Play from "@/assets/Hero/Play.png";
import Decore from "@/assets/Hero/Decore.png";
import Navbar from "@/components/Common/Navbar/Navbar";
import { Text } from "@/components/Common";

export default function Hero() {
    return (
        <div>
            <Navbar />
            <div className="w-[1200px] h-[764px] top-[105px] pt-[112px] relative">
                <div className="w-[630px] h-[535px] relative">
                    <div>
                        <Text size="h5" className="text-[#DF6951] pb-[24px]">BEST DESTINATIONS AROUND THE WORLD</Text>
                    </div>
                    <div className="relative">
                        <Text size="h1" className="text-[#181E4B] pb-[30px]">Travel, enjoy and live a new and full life</Text>
                        <div className="absolute top-[50px] left-0">
                            <Image src={Decore} alt="decore" />
                        </div>
                    </div>
                    <div>
                        <Text size="p" className="leading-[30px] text-[#5E6282]">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</Text>
                    </div>
                </div>
                <div className="flex w-[379px] h-[60px] gap-11 text-center justify-center items-center">
                    <div className="border bg-[#F1A501] rounded-[10px] h-[60px] w-[170px] cursor-pointer">
                        <Text className=" text-white py-4">Find out more</Text>
                    </div>
                    <div className="flex items-center justify-center text-center gap-5">
                        <div className="flex items-center justify-center rounded-full border bg-[#DF6951] h-[52px] w-[52px]">
                            <Image src={Play} alt="play" className="h-[15px] w-[15px]" />
                        </div>
                        <Text className="text-[#686D77]">Play Demo</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}
