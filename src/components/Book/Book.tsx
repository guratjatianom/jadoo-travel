import React from 'react';
import { Text } from "@/components/Common";
import Image from "next/image";
import gambar1 from "@/assets/Book/gambar1.svg";
import gambar2 from "@/assets/Book/gambar2.svg";
import gambar3 from "@/assets/Book/gambar3.svg";
import Building from "@/assets/Book/building.png";
import Leaf from "@/assets/Book/leaf.png";
import Map from "@/assets/Book/map.png";
import Masjid from "@/assets/Book/masjid.png";
import Pemandangan from "@/assets/Book/pemandangan.jpg";
import Send from "@/assets/Book/send.png";

export default function Book() {
  return (
    <div className="flex w-full h-[492px] mt-[186px] justify-between items-start">
      <div className="w-[50%] mb-8">
        <Text size="h6" className="leading-[27px] text-[#5E6282]">
          Easy and Fast
        </Text>
        <Text
          size="h2"
          fontFamily="volkhov"
          className="text-[#14183E] w-[511px] h-[130px]"
        >
          Book your next trip in 3 easy steps
        </Text>
        <div className="mt-6">
          <div className="flex items-center mb-6">
            <Image src={gambar1} alt="Choose Destination" className="mr-3" />
            <div>
              <Text className="text-[16px] leading-[19.92px] text-[#5E6282] font-bold mb-2">
                Choose Destination
              </Text>
              <Text className="text-[16px] leading-[19.92px] text-[#5E6282]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </Text>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <Image src={gambar2} alt="Make Payment" className="mr-3" />
            <div>
              <Text className="text-[16px] leading-[19.92px] text-[#5E6282] font-bold mb-2">
                Make Payment
              </Text>
              <Text className="text-[16px] leading-[19.92px] text-[#5E6282]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </Text>
            </div>
          </div>

          <div className="flex items-center">
            <Image src={gambar3} alt="Reach Airport on Selected Date" className="mr-3" />
            <div>
              <Text className="text-[16px] leading-[19.92px] text-[#5E6282] font-bold mb-2">
                Reach Airport on Selected Date
              </Text>
              <Text className="text-[16px] leading-[19.92px] text-[#5E6282]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[370px] h-[400px] m-auto bg-white rounded-[15px] shadow-lg p-4">
        <div className="rounded-t-[15px] overflow-hidden">
          <Image src={Pemandangan} alt="Trip to Greece" className="w-full h-[161px] object-cover" />
        </div>
        <div className="p-4">
          <Text className="text-[24px] font-bold text-[#14183E]">
            Trip To Greece
          </Text>
          <Text className="text-[14px] text-[#5E6282] mb-2">
            14-29 June | by Robbin Joseph
          </Text>
          <div className="flex items-center mb-5">
            <Image src={Send} alt="Send Icon" className="w-[24px] h-[24px] mr-2" />
            <Image src={Leaf} alt="Leaf Icon" className="w-[24px] h-[24px] mr-2" />
            <Image src={Map} alt="Map Icon" className="w-[24px] h-[24px] mr-2" />
          </div>
          <Text className="text-[14px] text-[#5E6282]">
            <Image src={Building} alt="People Icon" className="inline w-[16px] h-[16px] mr-2" />
            24 people going
          </Text>
        </div>
        <div className="absolute top-[210px] right-[-125px] w-[263px] h-auto bg-white shadow-lg rounded-[10px] p-4 flex flex-col items-start">
          <div className="flex items-center mb-2">
            <Image src={Masjid} alt="Rome Icon" className="w-[50px] h-[50px] mr-3" />
            <div>
              <Text className="text-[14px] text-[#5E6282]">Ongoing</Text>
              <Text className="text-[18px] font-bold text-[#14183E]">Trip to Rome</Text>
            </div>
          </div>
          <Text className="text-[14px] text-[#5E6282] ml-[60px] mb-2">40% completed</Text>
          <div className="w-[156px] bg-[#D8D8D8] rounded-full ml-[60px] h-[6px]">
            <div className="bg-[#5E6282] h-[6px] rounded-full" style={{ width: '40%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
