"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { CategoryContainer, CategoryItem, CategoryIcon } from './Services.styled';
import { Text } from "@/components/Common";
import Microphone from "@/assets/Services/microphone.svg";
import Satelit from "@/assets/Services/satelit.svg";
import Settings from "@/assets/Services/settings.svg";
import Plane from "@/assets/Hero/plane.png";
import Bintang from "@/assets/Services/bintang.svg";
import Rectangle from "@/assets/Services/rectangle.svg";
import Rectanglered from "@/assets/Services/rectanglered.svg";

export default function Services() {
  const categories = [
    { title: "Calculated Weather", description: "Built Wicket longer admire do barton vanity itself do in it.", icon: Satelit },
    { title: "Best Flights", description: "Engrossed listening. Park gate sell they west hard for the.", icon: Plane },
    { title: "Local Events", description: "Barton vanity itself do in it. Preferred to men it engrossed listening.", icon: Microphone },
    { title: "Customization", description: "We deliver outsourced aviation services for military customers.", icon: Settings },
  ];

  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="relative w-[90%] max-w-[1140px] h-auto mt-[97px] mx-auto lg:h-[525px]"> {/* Mengubah width untuk mobile */}
      <div className="absolute top-[20px] right-[-45px] z-10 hidden lg:block">
        <Image src={Bintang} alt="bintang" className="w-[150px] h-[150px]" />
      </div>
      <div className="text-center">
        <Text size="h6" className="leading-[27px] text-[#5E6282] pb-[10px]">CATEGORY</Text>
        <Text size="h2" fontFamily="volkhov" className="text-[#14183E]">We Offer Best Services</Text>
      </div>

      <CategoryContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"> {/* Responsive grid */}
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            $isActive={activeCategory === index}
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
            className="p-4 sm:p-6 lg:p-8"  // Padding disesuaikan
          >
            <div className="relative flex justify-center items-center">
              <div className="absolute z-0">
                <Image src={Rectangle} alt="rectangle" className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]" />
              </div>
              <div className={`absolute z-10 transition-opacity duration-300 ${activeCategory === index ? 'opacity-100' : 'opacity-0'}`}>
                <Image src={Rectanglered} alt="rectangle red" className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]" />
              </div>
              <CategoryIcon className="relative z-20 w-[50px] h-[50px] lg:w-auto lg:h-auto">
                <Image src={category.icon} alt={category.title} />
              </CategoryIcon>
            </div>
            <Text size="h6" className="text-[#14183E] mb-[10px]">{category.title}</Text>
            <Text size="p" className="text-[#5E6282]">{category.description}</Text>
          </CategoryItem>
        ))}
      </CategoryContainer>
    </div>
  );
}
