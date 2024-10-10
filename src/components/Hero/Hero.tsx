"use client";
import React from "react";
import Image from "next/image";
import Play from "@/assets/Hero/Play.png";
import Decore from "@/assets/Hero/Decore.png";
import Deco from "@/assets/Hero/Deco.png"; // Import gambar Deco
import Traveller from "@/assets/Hero/Traveller.png";
import Plane from "@/assets/Hero/plane.png";
import Navbar from "@/components/Common/Navbar/Navbar";
import { PlaneAnimation, TravellerAnimation } from "./Hero.styled";
import { Text } from "@/components/Common";

export default function Hero() {
    return (
        <div className="relative w-full h-auto lg:h-[764px]">
            <Navbar />
            <Image
                src={Deco}
                alt="deco"
                className="absolute top-[-149px] left-[50%] transform -translate-x-1/2 lg:left-[890px] lg:right-0 z-10"
            />
            <div className="relative w-full lg:w-[1200px] pt-[112px] z-10 px-4 lg:px-0">
                {/* Traveller Animation */}
                <TravellerAnimation className="z-30 absolute left-[10px] transform -translate-x-1/2 top-[10px] lg:left-[500px] lg:translate-x-0 lg:top-[65px]">
                    <Image src={Traveller} alt="traveller" className="w-auto h-auto" />
                </TravellerAnimation>

                {/* Plane Animation */}
                <PlaneAnimation className="z-20 absolute left-[-10px] transform -translate-x-1/2 top-[150px] lg:left-[500px] lg:translate-x-0 lg:top-[100px]">
                    <Image src={Plane} alt="plane" className="w-auto h-auto" />
                </PlaneAnimation>

                <div className="w-full lg:w-[630px] h-auto lg:h-[535px] relative mt-[250px] lg:mt-0">
                    <Text size="h5" className="text-[#DF6951] pb-[24px] text-center lg:text-left">
                        BEST DESTINATIONS AROUND THE WORLD
                    </Text>
                    <div className="relative">
                        <Text size="h1" fontFamily="volkhov" className="text-[#181E4B] pb-[30px] relative z-10 text-center lg:text-left">
                            Travel, enjoy and live a new and full life
                        </Text>
                        <div className="absolute w-[385px] h-[12px] top-[80px] left-1/2 transform -translate-x-1/2 lg:left-[245px] lg:transform-none z-0">
                            <Image src={Decore} alt="decore" />
                        </div>
                    </div>
                    <Text size="p" className="font-volkhov leading-[30px] text-[#5E6282] text-center lg:text-left">
                        Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                    </Text>
                </div>
                <div className="flex flex-col lg:flex-row w-full lg:w-[379px] h-auto gap-5 text-center lg:text-left">
                    <div className="border bg-[#F1A501] rounded-[10px] h-[60px] w-full lg:w-[170px] cursor-pointer flex justify-center items-center">
                        <Text className="text-white py-4">Find out more</Text>
                    </div>
                    <div className="flex items-center justify-center text-center gap-5">
                        <div className="flex items-center justify-center rounded-full border bg-[#DF6951] h-[52px] w-[52px]">
                            <Image src={Play} alt="play" className="h-[15px] w-[15px]" />
                        </div>
                        <Text className="text-[#686D77] cursor-pointer">Play Demo</Text>
                    </div>
                </div>
            </div>

            {/* Plane Animation (for bottom) */}
            <PlaneAnimation className="z-40 absolute top-[150px] left-[0px] transform -translate-x-1/2 lg:left-[980px] lg:translate-x-0 lg:top-[150px]">
                <Image src={Plane} alt="plane" />
            </PlaneAnimation>
        </div>
    );
}
