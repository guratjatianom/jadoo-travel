"use client";
import React, { useState } from 'react';
import { Text } from "@/components/Common";
import Image from "next/image";
import Lingkaran1 from "@/assets/Testimonials/lingkaran1.png";
import Lingkaran2 from "@/assets/Testimonials/lingkaran2.png";
import Lingkaran3 from "@/assets/Testimonials/lingkaran3.png";
import Foto from "@/assets/Testimonials/foto.png";
import Up from "@/assets/Testimonials/vectorup.svg";
import Down from "@/assets/Testimonials/vectordown.svg";

export default function Testimonials() {
    const [isMikeActive, setIsMikeActive] = useState(true);

    const handleToggle = () => {
        setIsMikeActive(!isMikeActive);
    };

    return (
        <div className="flex flex-col md:flex-row w-full md:w-[1165px] h-auto mt-[100px] md:mt-[200px] px-4 md:px-0">
            <div className="mb-8 md:mb-0">
                <Text size="h6" className="leading-[27px] text-[#5E6282]">Testimonials</Text>
                <Text size="h2" fontFamily="volkhov" className="text-[#14183E] w-full md:w-[409px] h-auto">
                    What people say about Us.
                </Text>
                <div className="flex gap-[15px] md:gap-[25px] pt-[40px] md:pt-[82px] justify-center md:justify-start">
                    <Image src={Lingkaran1} alt="lingkaran1" className="w-[20px] h-[20px] md:w-auto md:h-auto" />
                    <Image src={Lingkaran2} alt="lingkaran2" className="w-[20px] h-[20px] md:w-auto md:h-auto" />
                    <Image src={Lingkaran3} alt="lingkaran3" className="w-[20px] h-[20px] md:w-auto md:h-auto" />
                </div>
            </div>
            <div className="relative w-full md:w-[669px] ml-0 md:ml-[87px]">
                <div className="absolute top-0 left-0 z-30">
                    <Image src={Foto} alt="Mike Taylor's Photo" className="w-[50px] h-[50px] rounded-full" />
                </div>
                <div className={`absolute top-0 left-0 transition-opacity duration-500 ${isMikeActive ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
                    <div className="w-full md:w-[541px] h-auto bg-white p-4 shadow-lg rounded-[10px] ml-[65px]">
                        <div className="flex items-start gap-[15px] mb-4">
                            <Text className="text-[#5E6282] text-[16px] leading-[32px] w-full md:w-[402px]">
                                “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                            </Text>
                        </div>
                        <Text className="text-[#5E6282] text-[18px] leading-[27px] pb-[5px]">Mike Taylor</Text>
                        <Text className="text-[#5E6282] text-[14px] leading-[21px]">Lahore, Pakistan</Text>
                    </div>
                </div>
                <div className={`absolute top-0 left-0 transition-opacity duration-500 ${!isMikeActive ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
                    <div className="w-full md:w-[502px] h-auto bg-white p-4 shadow-lg rounded-[10px] ml-[65px]">
                        <Text className="text-[#5E6282] mb-[44px]">
                            “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                        </Text>
                        <Text className="text-[#5E6282] text-[18px] leading-[27px] pb-[5px]">Chris Thomas</Text>
                        <Text className="text-[#5E6282] text-[14px] leading-[21px]">CEO of Red Button</Text>
                    </div>
                </div>
            </div>
            <div className="flex flex-row md:flex-col justify-center gap-[15px] md:gap-[30px] mt-[20px]">
                <button onClick={() => setIsMikeActive(true)} className="transform rotate-0">
                    <Image src={Up} alt="up" className="w-4 h-4 md:w-auto md:h-auto" />
                </button>
                <button onClick={handleToggle} className="transform rotate-0">
                    <Image src={Down} alt="down" className="w-4 h-4 md:w-auto md:h-auto" />
                </button>
            </div>
        </div>
    );
}
