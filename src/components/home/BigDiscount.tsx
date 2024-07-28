import React from "react";
import { MdAdd } from "react-icons/md";

const BigDiscount = () => {
  return (
    <div className='w-[96%] mx-auto bg-[#1C1C1C] mt-20 flex flex-col items-center'>
      <div className='text-center pt-12'>
        <p className='text-[#FAFAFA]'>BIG DISCOUNT</p>
        <h2 className='text-white text-5xl my-4'>Apple iPhone 15 pro max</h2>
        <p>
          <span className='text-blue-600 font-medium text-lg'>$50.00</span>{" "}
          <del className='text-red- ml-3'>$55.00</del>
        </p>
        <div className='flex items-center justify-center gap-2 text-center'>
          <button className='flex items-center gap-3'>
            <MdAdd /> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigDiscount;
