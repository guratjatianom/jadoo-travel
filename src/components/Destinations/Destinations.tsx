import React from 'react';
import { Text } from "@/components/Common";
import Image from 'next/image';
import Rome from "@/assets/Destinations/rome.png";
import London from "@/assets/Destinations/london.png";
import Eropa from "@/assets/Destinations/eropa.png";
import Cursor from "@/assets/Destinations/cursor.svg";
import Dec from "@/assets/Destinations/dec.png";

export default function Destinations() {
    return (
        <div className="relative w-[1140px] h-[617px] mt-[123px]">
            <div className="text-center">
                <Text size="h6" className="leading-[27px] text-[#5E6282] pb-[8px]">Top Selling</Text>
                <Text size="h2" fontFamily="volkhov" className="text-[#14183E] pb-[60px]">Top Destinations</Text>
            </div>
            <div className="relative flex items-center justify-center gap-9 z-10">
                <div className="shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                    <Image src={Rome} alt="rome" width={314} height={457} />
                    <div className="w-[314px] h-[130px] bg-white hover:bg-gray-100 transition-colors duration-300">
                        <div className="flex justify-between px-[20px] pt-[27px] pb-[19px]">
                            <Text size="h6" className="leading-[22.41px] text-[#5E6282] hover:text-[#14183E] transition-colors duration-300">Rome, Italty</Text>
                            <Text size="h6" className="text-[#5E6282] hover:text-[#14183E] transition-colors duration-300">$5.42k</Text>
                        </div>
                        <div className="flex items-center pl-[20px]">
                            <div className="pl-[10px]">
                                <Image src={Cursor} alt="cursor" />
                            </div>
                            <Text className="text-[#5E6282] pl-[14px] hover:text-[#14183E] transition-colors duration-300">10 Days Trip</Text>
                        </div>
                    </div>
                </div>
                <div className="shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                    <Image src={London} alt="london" width={314} height={457} />
                    <div className="w-[314px] h-[130px] bg-white hover:bg-gray-100 transition-colors duration-300">
                        <div className="flex justify-between px-[20px] pt-[27px] pb-[19px]">
                            <Text size="h6" className="leading-[22.41px] text-[#5E6282] hover:text-[#14183E] transition-colors duration-300">London, UK</Text>
                            <Text size="h6" className="text-[#5E6282] hover:text-[#14183E] transition-colors duration-300">$4.2k</Text>
                        </div>
                        <div className="flex items-center pl-[20px]">
                            <div className="pl-[10px]">
                                <Image src={Cursor} alt="cursor" />
                            </div>
                            <Text className="text-[#5E6282] pl-[14px] hover:text-[#14183E] transition-colors duration-300">12 Days Trip</Text>
                        </div>
                    </div>
                </div>
                <div className="shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                    <Image src={Eropa} alt="eropa" width={314} height={457} />
                    <div className="w-[314px] h-[130px] bg-white hover:bg-gray-100 transition-colors duration-300">
                        <div className="flex justify-between px-[20px] pt-[27px] pb-[19px]">
                            <Text size="h6" className="leading-[22.41px] text-[#5E6282] hover:text-[#14183E] transition-colors duration-300">Full Europe</Text>
                            <Text size="h6" className="text-[#5E6282] hover:text-[#14183E] transition-colors duration-300">$15k</Text>
                        </div>
                        <div className="flex items-center pl-[20px]">
                            <div className="pl-[10px]">
                                <Image src={Cursor} alt="cursor" />
                            </div>
                            <Text className="text-[#5E6282] pl-[14px] hover:text-[#14183E] transition-colors duration-300">28 Days Trip</Text>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-[230px] bottom-[-50px] right-[-0px] z-0">
                <Image src={Dec} alt="decore" />
            </div>
        </div>
    );
}
