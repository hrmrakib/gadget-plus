import React from "react";
import Image from "next/image";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const TrendingCategories = () => {
  return (
    <div className='my-10 px-10 py-20'>
      <h2 className='text-3xl text-white t-shadow'>TrendingCategories</h2>

      <div className='relative mt-10 flex gap-10 px-4'>
        <div>
          <div className='bg-[#534848] rounded-full w-32 h-32 flex items-center justify-center'>
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
        <div>
          <div className='bg-[#534848] rounded-full w-32 h-32 flex items-center justify-center'>
            <Image
              src='/headphone.png'
              width={150}
              height={150}
              alt='headphone'
            />
          </div>
          <h2 className='text-center text-white mt-2'>Headphone</h2>
        </div>
        <div>
          <div className='bg-[#534848] rounded-full w-32 h-32 flex items-center justify-center'>
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

        {/* forward and back */}
        <div className='absolute top-1/3 cursor-pointer -left-8 bg-[#2043f1] hover:bg-[#163cf7ab]  p-2 rounded'>
          <BiLeftArrowAlt className='text-white text-lg' />
        </div>

        <div className='absolute top-1/3 cursor-pointer -right-8 bg-[#2043f1] hover:bg-[#163cf7a9]  p-2 rounded'>
          <BiRightArrowAlt className='text-white text-lg' />
        </div>
      </div>
    </div>
  );
};

export default TrendingCategories;
