"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const trending = [
  {
    id:1,
    name: "",
    image: ""
  }
]

const TrendingCategories = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='relative'>
      <div className='mt-10 px-10 py-20'>
        <h2 className='text-3xl text-white t-shadow'>TrendingCategories</h2>

        <div
          ref={scrollContainerRef}
          className='mt-10 flex gap-16 px-4 overflow-x-auto scrollbar-zero'
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, i) => (
            <div key={i}>
              <div className='bg-[#534848] rounded-full w-36 h-36 flex items-center justify-center'>
                <Image
                  src='/headphone.png'
                  className=''
                  width={150}
                  height={150}
                  alt='headphone'
                />
              </div>
              <h2 className='text-center text-white mt-2'>Headphone</h2>
            </div>
          ))}
        </div>
        {/* forward and back */}
        <div
          onClick={scrollLeft}
          className='absolute top-1/2 cursor-pointer left-1 bg-[#2043f1] hover:bg-[#163cf7ab] p-1 rounded'
        >
          <BiLeftArrowAlt className='text-white text-xl' />
        </div>

        <button
          onClick={scrollRight}
          className='absolute top-1/2 cursor-pointer right-1 bg-[#2043f1] hover:bg-[#163cf7a9] p-1 rounded'
        >
          <BiRightArrowAlt className='text-white text-xl' />
        </button>
      </div>
    </div>
  );
};

export default TrendingCategories;
