"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const slider = [
  {
    img: "/iphone15.jpg",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero totam odio deleniti a modi nostrum soluta minima commodi consequuntur eveniet!",
    customerName: "Moinal Dola",
    designation: "kaca mal",
    rating: 2,
  },
  {
    img: "/iphone14vs15.jpg",
    reviewText: "Lorem!",
    customerName: "Sobur Mia",
    designation: "Kaji",
    rating: 5,
  },
];

const CustomerFeedback = () => {
  const [source, setSource] = useState(slider);
  const [index, setIndex] = useState(0);
  const [currentSlider, setCurrentSlider] = useState(source[index]);

  const handleGoSlider = () => {
    // if (source.length < index) {
    // return setIndex(0), setCurrentSlider(slider[0]);
    // }

    // console.log(source.length, index);

    
    setIndex((prev) => prev + 1);
    console.log({ index });
    setCurrentSlider(slider[index]);
  };


  // console.log({ currentSlider, index });

  return (
    <div className='w-[96%] mx-auto mt-20'>
      <h2 className='text-3xl text-white t-shadow mb-8'>
        OUR CUSTOMER FEEDBACK
      </h2>
      <div className='relative flex items-center gap-10'>
        <div>
          <Image src={currentSlider?.img} width={200} height={200} alt='' />
        </div>
        <div>
          <p className='text-white'>{currentSlider?.reviewText}</p>
        </div>

        {/* forward and backword */}
        <div className='absolute top-1/2 cursor-pointer left-1 bg-[#2043f1] hover:bg-[#163cf7ab] p-1 rounded'>
          <BiLeftArrowAlt className='text-white text-xl' />
        </div>

        <div
          onClick={handleGoSlider}
          className='absolute top-1/2 cursor-pointer right-1 bg-[#2043f1] hover:bg-[#163cf7a9] p-1 rounded'
        >
          <BiRightArrowAlt className='text-white text-xl' />
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
