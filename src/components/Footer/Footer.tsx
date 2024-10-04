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
        <div className="relative w-[1150px]">
            <div className="flex text-center justify-center items-center">
                <div className="w-[207px] h-[133px] pr-[83px]">
                    <Text size="h3" className="text-[#181E4B]">Jadoo.</Text>
                    <Text className="text-[13px] text-[#5E6282] leading-[16.19px]">Book your trip in minute, get full
                        Control for much longer.
                    </Text>
                </div>
                <div className="flex w-[474px] h-auto">
                    <div className="text-left pr-[72px]">
                        <Text className="text-[21px] leading-[26.15px] pb-[34px]">Company</Text>
                        <div className="text-[#5E6282]">
                            <Text>About</Text>
                            <Text>Careers</Text>
                            <Text>Mobile</Text>
                        </div>
                    </div>
                    <div className="text-left pr-[72px]">
                        <Text className="text-[21px] leading-[26.15px] pb-[34px]">Contact</Text>
                        <div className="text-[#5E6282]">
                            <Text>Help/FAQ</Text>
                            <Text>Press</Text>
                            <Text>Affilates</Text>
                        </div>
                    </div>
                    <div className="text-left pr-[72px]">
                        <Text className="text-[21px] leading-[26.15px] pb-[34px]">More</Text>
                        <div className="text-[#5E6282]">
                            <Text>Airlinefees</Text>
                            <Text>Airline</Text>
                            <Text>Low fare tips</Text>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[214px] h-[147px]">
                    <div className="flex gap-[25px]">
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
            <div>
                <Text className="text-[#5E6282] text-center pt-[84px]">All rights reserved@jadoo.co</Text>
            </div>
        </div>
    )
}
