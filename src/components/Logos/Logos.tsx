import React from 'react';
import Image from "next/image";
import Axon from "@/assets/Logos/axon.jpg";
import Jetstar from "@/assets/Logos/jetstar.jpg";
import Expedia from "@/assets/Logos/expedia.jpg";
import Litalia from "@/assets/Logos/litalia.jpg";
import Qantas from "@/assets/Logos/qantas.jpg";

export default function Logos() {
    return (
        <div className='w-full md:w-[1073px] h-auto mt-[300px] md:mt-[96px]'>
            <div className="flex flex-wrap gap-[20px] md:gap-[50px] items-center justify-center">
                <div className="hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
                    <Image src={Axon} alt="axon" width={100} height={60} className="md:w-[140px] md:h-[50px]" />
                </div>
                <div className="hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
                    <Image src={Jetstar} alt="jetstar" width={100} height={60} className="md:w-[140px] md:h-[50px]" />
                </div>
                <div className="hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
                    <Image src={Expedia} alt="expedia" width={100} height={60} className="md:w-[140px] md:h-[50px]" />
                </div>
                <div className="hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
                    <Image src={Qantas} alt="qantas" width={100} height={60} className="md:w-[140px] md:h-[50px]" />
                </div>
                <div className="hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
                    <Image src={Litalia} alt="litalia" width={100} height={60} className="md:w-[140px] md:h-[50px]" />
                </div>
            </div>
        </div>
    )
}
