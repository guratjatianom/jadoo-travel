import React from 'react';
import { Text } from "@/components/Common";
import Bg from "@/assets/Subscribe/bg.png";
import Email from "@/assets/Subscribe/email.svg";
import Bintang from "@/assets/Subscribe/bintang.svg";
import Send from "@/assets/Subscribe/send.svg";
import Image from "next/image";

export default function Subscribe() {
  return (
    <div className='relative w-full md:w-[1100px] h-[350px] md:h-[490px] mt-[50px] md:mt-[90px] mb-[50px] md:mb-[96px] flex items-center justify-center'>
      <div className='absolute top-[-15px] right-[-0px] md:top-[-25px] md:right-[-25px] z-10'>
        <Image src={Send} alt="send" className="w-[60px] h-[60px] md:w-auto md:h-auto" />
      </div>
      <Image src={Bg} alt="bg" className='absolute inset-0 w-full h-full object-cover z-0' />
      <div className='relative z-10 flex flex-col items-center text-center px-4'>
        <div className='w-full md:w-[881px] h-auto md:h-[108px]'>
          <Text size="h4" className="text-[#5E6282] text-base md:text-xl">
            Subscribe to get information, latest news and other
            interesting offers about Jadoo
          </Text>
        </div>
        <div className="flex flex-col sm:flex-row items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center border border-gray-300 rounded-lg w-full sm:w-[300px] h-[50px]">
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
            className="w-full sm:w-[180px] h-[50px] bg-[#F66B0E] text-white px-6 rounded-lg"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="absolute bottom-[-15px] right-[-0px] md:bottom-[-50px] md:right-[-85px] z-10">
        <Image src={Bintang} alt="bintang-icon" className="w-[80px] h-[80px] md:w-[150px] md:h-[150px]" />
      </div>
    </div>
  );
}
