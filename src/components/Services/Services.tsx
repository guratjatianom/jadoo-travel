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
// import Rectangle from "@/assets/Services/rectangle.svg";
// import Rectanglered from "@/assets/Services/rectanglered.svg";

export default function Services() {
  const categories = [
    { title: "Calculated Weather", description: "Built Wicket longer admire do barton vanity itself do in it.", icon: Satelit },
    { title: "Best Flights", description: "Engrossed listening. Park gate sell they west hard for the.", icon: Plane },
    { title: "Local Events", description: "Barton vanity itself do in it. Preferred to men it engrossed listening.", icon: Microphone },
    { title: "Customization", description: "We deliver outsourced aviation services for military customers.", icon: Settings },
  ];

  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="relative w-[1140px] h-[525px] mt-[97px]">
      <div className="absolute top-[20px] right-[-45px] z-10">
        <Image src={Bintang} alt="bintang" className="w-[150px] h-[150px]" />
      </div>
      <div className="text-center">
        <Text size="h6" className="leading-[27px] text-[#5E6282] pb-[10px]">CATEGORY</Text>
        <Text size="h2" fontFamily="volkhov" className="text-[#14183E]">We Offer Best Services</Text>
      </div>

      <CategoryContainer>
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            isActive={activeCategory === index}
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <CategoryIcon>
              <Image src={category.icon} alt={category.title} />
            </CategoryIcon>
            <Text size="h6" className="text-[#14183E] mb-[10px]">{category.title}</Text>
            <Text size="p" className="text-[#5E6282]">{category.description}</Text>
          </CategoryItem>
        ))}
      </CategoryContainer>
    </div>
  );
}
