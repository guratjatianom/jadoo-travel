import React from 'react';
import Image from "next/image";
import Axon from "@/assets/Logos/axon.jpg";
import Jetstar from "@/assets/Logos/jetstar.jpg";
import Expedia from "@/assets/Logos/expedia.jpg";
import Litalia from "@/assets/Logos/litalia.jpg";
import Qantas from "@/assets/Logos/qantas.jpg";

export default function Logos() {
    return (
        <div className='w-[1073px] h-[162px] mt-[96px]'>
            <div className="flex gap-[50px] items-center justify-center">
                <div className="hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
                    <Image src={Axon} alt="axon" width={140} height={80} />
                </div>
                <div className="hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
                    <Image src={Jetstar} alt="jetstar" width={140} height={80} />
                </div>
                <div className="hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
                    <Image src={Expedia} alt="expedia" width={140} height={80} />
                </div>
                <div className="hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
                    <Image src={Qantas} alt="qantas" width={140} height={80} />
                </div>
                <div className="hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
                    <Image src={Litalia} alt="litalia" width={140} height={80} />
                </div>
            </div>
        </div>
    )
}
