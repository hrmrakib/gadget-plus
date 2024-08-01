import Image from "next/image";
import React from "react";
import { FaEye, FaHeart, FaPlus, FaStar } from "react-icons/fa";

const TopNewArrivals = () => {
  return (
    <div>
      <h2 className='text-3xl text-white t-shadow mb-8'>TOP NEW ARRIVALS</h2>

      <div>
        <div>
          <div className='bg-[#1c1c1c] p-5'>
            <div className='bg-[#262626] flex flex-col items-center justify-center gap-2'>
              <Image
                src='/ultramax-watch.avif'
                width={220}
                height={350}
                alt='ultra'
              />
              <button className='w-full flex items-center justify-center gap-3 py-2 border border-gray-700 text-white'>
                <FaPlus />
                Add to Cart
              </button>
            </div>

            <h2 className='text-2xl text-white my-2'>
              Ultra max 2.01 Big Diaplay
            </h2>
            <div className='flex items-center gap-1 *:text-orange-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h3 className='text-2xl text-red-700 font-semibold my-2'>$56.00</h3>
            <hr />
            <div className='flex items-center justify-center my-2 gap-5 *:text-blue-700 *:text-lg'>
              <FaHeart />
              <FaEye />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNewArrivals;
