import React from 'react'
import { Text } from "@/components/Common";

export default function Footer() {
    return (
        <div>
            <div>
                <div className="w-[207px] h-[133px]">
                    <Text size="h3" className="text-[#181E4B]">Jadoo.</Text>
                    <Text className="text-[13px] text-[#5E6282] leading-[16.19px]">Book your trip in minute, get full
                        Control for much longer.
                    </Text>
                </div>
                <div className="flex">
                    <div>
                        <Text className="text-[21px] leading-[26.15px]">Company</Text>
                        <Text>About</Text>
                        <Text>Careers</Text>
                        <Text>Mobile</Text>
                    </div>
                    <div>
                        <Text className="text-[21px] leading-[26.15px]">Contact</Text>
                        <Text>About</Text>
                        <Text>Careers</Text>
                        <Text>Mobile</Text>
                    </div>
                    <div>
                        <Text className="text-[21px] leading-[26.15px]">More</Text>
                        <Text>About</Text>
                        <Text>Careers</Text>
                        <Text>Mobile</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}
