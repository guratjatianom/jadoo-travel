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
        <div className="flex w-[1165px] h-auto mt-[200px]">
            {/* Kiri - Section Judul */}
            <div>
                <Text size="h6" className="leading-[27px] text-[#5E6282]">Testimonials</Text>
                <Text size="h2" fontFamily="volkhov" className="text-[#14183E] w-[409px] h-auto">What people say about Us.</Text>
                <div className="flex gap-[25px] pt-[82px]">
                    <Image src={Lingkaran1} alt="lingkaran1" />
                    <Image src={Lingkaran2} alt="lingkaran2" />
                    <Image src={Lingkaran3} alt="lingkaran3" />
                </div>
            </div>

            {/* Kanan - Section Testimonial */}
            <div className="relative w-[669px] ml-[87px]">
                {/* Gambar Mike Taylor Tetap */}
                <div className="absolute top-0 left-0 z-30">
                    <Image src={Foto} alt="Mike Taylor's Photo" className="w-[50px] h-[50px] rounded-full" />
                </div>

                {/* Testimonial Mike Taylor */}
                <div className={`absolute top-0 left-0 transition-opacity duration-500 ${isMikeActive ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
                    <div className="w-[541px] h-[279px] bg-white p-4 shadow-lg rounded-[10px] ml-[65px]">
                        <div className="flex items-start gap-[15px] mb-4">
                            <Text className="text-[#5E6282] text-[16px] leading-[32px] w-[402px]">
                                “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                            </Text>
                        </div>
                        <Text className="text-[#5E6282] text-[18px] leading-[27px] pb-[5px]">Mike Taylor</Text>
                        <Text className="text-[#5E6282] text-[14px] leading-[21px]">Lahore, Pakistan</Text>
                    </div>
                </div>

                {/* Testimonial Chris Thomas */}
                <div className={`absolute top-0 left-0 transition-opacity duration-500 ${!isMikeActive ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
                    <div className="w-[502px] h-[232px] bg-white p-4 shadow-lg rounded-[10px] ml-[65px]">
                        <Text className="text-[#5E6282] mb-[44px]">
                            “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                        </Text>
                        <Text className="text-[#5E6282] text-[18px] leading-[27px] pb-[5px]">Chris Thomas</Text>
                        <Text className="text-[#5E6282] text-[14px] leading-[21px]">CEO of Red Button</Text>
                    </div>
                </div>

                {/* Buttons for Up and Down */}
                <div className="flex justify-end gap-2 mt-[20px]">
                    <button onClick={() => setIsMikeActive(true)} className="p-2 transform rotate-0">
                        <Image src={Up} alt="up" />
                    </button>
                    <button onClick={handleToggle} className="p-2 transform rotate-0">
                        <Image src={Down} alt="down" />
                    </button>
                </div>
            </div>
        </div>
    );
}
