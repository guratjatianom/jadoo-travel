import React from 'react'
import { Text } from "@/components/Common";
import Facebook from "@/assets/Footer/facebook.png";
import Instagram from "@/assets/Footer/instagram.png";
import Twitter from "@/assets/Footer/twitter.png";
import GooglePlay from "@/assets/Footer/google-play.png";
import PlayStore from "@/assets/Footer/play-store.png";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="relative w-full md:w-[1150px] px-4 md:px-0">
            <div className="flex flex-col md:flex-row text-center md:text-left justify-center items-center md:items-start">
                <div className="w-full md:w-[207px] h-auto md:h-[133px] mb-6 md:mb-0 md:pr-[83px]">
                    <Text size="h3" className="text-[#181E4B]">Jadoo.</Text>
                    <Text className="text-[13px] text-[#5E6282] leading-[16.19px]">
                        Book your trip in minutes, get full control for much longer.
                    </Text>
                </div>
                <div className="flex flex-col md:flex-row w-full md:w-[474px] h-auto mb-6 md:mb-0 text-center md:text-left items-center md:items-start">
                    <div className="text-center md:text-left mb-4 md:mb-0 md:pr-[72px]">
                        <Text className="text-[21px] leading-[26.15px] pb-[34px]">Company</Text>
                        <div className="text-[#5E6282]">
                            <Text>About</Text>
                            <Text>Careers</Text>
                            <Text>Mobile</Text>
                        </div>
                    </div>
                    <div className="text-center md:text-left mb-4 md:mb-0 md:pr-[72px]">
                        <Text className="text-[21px] leading-[26.15px] pb-[34px]">Contact</Text>
                        <div className="text-[#5E6282]">
                            <Text>Help/FAQ</Text>
                            <Text>Press</Text>
                            <Text>Affiliates</Text>
                        </div>
                    </div>
                    <div className="text-center md:text-left md:pr-[72px]">
                        <Text className="text-[21px] leading-[26.15px] pb-[34px]">More</Text>
                        <div className="text-[#5E6282]">
                            <Text>Airline fees</Text>
                            <Text>Airline</Text>
                            <Text>Low fare tips</Text>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start w-full md:w-[214px] h-auto md:h-[147px]">
                    <div className="flex gap-[25px] mb-4">
                        <div className="flex items-center justify-center shadow-lg rounded-full w-[44px] h-[44px]">
                            <Image src={Facebook} alt="Facebook" />
                        </div>
                        <div className="">
                            <Image src={Instagram} alt="Instagram" />
                        </div>
                        <div className="flex items-center justify-center shadow-lg rounded-full  w-[44px] h-[44px]">
                            <Image src={Twitter} alt="Twitter" />
                        </div>
                    </div>
                    <Text className="text-[20px] leading-[24.9px] pb-[16px] text-[#5E6282]">Discover our app</Text>
                    <div className="flex gap-[7px]">
                        <Image src={GooglePlay} alt="googleplay" />
                        <Image src={PlayStore} alt="playstore" />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Text className="text-[#5E6282] pt-[84px] mb-[79px]">All rights reserved @jadoo.co</Text>
            </div>
        </div>
    )
}
