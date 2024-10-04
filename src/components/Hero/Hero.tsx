"use client";
import React from "react";
import Image from "next/image";
import Play from "@/assets/Hero/Play.png";
import Decore from "@/assets/Hero/Decore.png";
import Deco from "@/assets/Hero/Deco.png";
import Traveller from "@/assets/Hero/Traveller.png";
import Plane from "@/assets/Hero/plane.png";
import Navbar from "@/components/Common/Navbar/Navbar";
import { PlaneAnimation, TravellerAnimation } from "./Hero.styled";
import { Text } from "@/components/Common";

export default function Hero() {
    return (
        <div className="relative w-full h-[764px]">
            <Navbar />
            <Image src={Deco} alt="decore" className="absolute top-[-149px] right-[-100px] z-10"
            />
            <div className="w-[1200px] h-[764px] pt-[112px] relative z-10">
                <div className="w-[630px] h-[535px] relative">
                    <div>
                        <Text size="h5" className="text-[#DF6951] pb-[24px]">BEST DESTINATIONS AROUND THE WORLD</Text>
                    </div>
                    <div className="relative">
                        <Text size="h1" fontFamily="volkhov" className="text-[#181E4B] pb-[30px] relative z-10">Travel, enjoy and live a new and full life</Text>
                        <div className="absolute w-[385px] h-[12px] top-[75px] left-[275px] z-0">
                            <Image src={Decore} alt="decore" />
                        </div>
                    </div>
                    <div>
                        <Text size="p" className="font-volkhov leading-[30px] text-[#5E6282]">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</Text>
                    </div>
                </div>
                <div className="flex w-[379px] h-[60px] gap-11 text-center justify-center items-center">
                    <div className="border bg-[#F1A501] rounded-[10px] h-[60px] w-[170px] cursor-pointer">
                        <Text className="text-white py-4">Find out more</Text>
                    </div>
                    <div className="flex items-center justify-center text-center gap-5">
                        <div className="flex items-center justify-center rounded-full border bg-[#DF6951] h-[52px] w-[52px]">
                            <Image src={Play} alt="play" className="h-[15px] w-[15px]" />
                        </div>
                        <Text className="text-[#686D77]">Play Demo</Text>
                    </div>
                </div>
            </div>
            <TravellerAnimation className="z-30 absolute left-[500px] top-[65px]">
                <Image src={Traveller} alt="traveller" />
            </TravellerAnimation>
            <PlaneAnimation className="z-20 absolute top-[100px] left-[500px]">
                <Image src={Plane} alt="plane" />
            </PlaneAnimation>
            <PlaneAnimation className="z-40 absolute top-[150px] left-[980px]">
                <Image src={Plane} alt="plane" />
            </PlaneAnimation>
        </div>
    );
}
