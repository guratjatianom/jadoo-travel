import React from 'react';
import { Text } from "@/components/Common";
import Bg from "@/assets/Subscribe/bg.png";
import Email from "@/assets/Subscribe/email.svg";
import Bintang from "@/assets/Subscribe/bintang.svg";
import Image from "next/image";

export default function Subscribe() {
  return (
    <div className='relative w-[1100px] h-[490px] mt-[90px] mb-[96px] flex items-center justify-center'>
      <Image src={Bg} alt="bg" className='absolute inset-0 w-full h-full object-cover z-0' />
      <div className='relative z-10 flex flex-col items-center text-center'>
        <div className='w-[881px] h-[108px]'>
          <Text size="h4" className="text-[#5E6282]">
            Subscribe to get information, latest news and other
            interesting offers about Jadoo
          </Text>
        </div>
        <div className="flex items-center mt-6 space-x-4">
          <div className="flex items-center border border-gray-300 rounded-lg w-[300px] h-[50px]">
            <div className="pl-4">
              <Image src={Email} alt="email-icon" className="w-6 h-6" />
            </div>
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow h-full px-4 focus:outline-none border-none"
            />
          </div>
          <button
            className="w-[180px] h-[50px] bg-[#F66B0E] text-white px-6 rounded-lg"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="absolute bottom-[-50px] right-[-85px] z-10">
        <Image src={Bintang} alt="bintang-icon" className="w-[150px] h-[150px]" />
      </div>
    </div>
  );
}
