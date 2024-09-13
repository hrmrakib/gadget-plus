import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { Box } from "@mui/joy";

const page = ({ params }: { params: { trending: string } }) => {
  console.log(params.trending);

  const trendingUpperCase =
    params.trending.charAt(0).toUpperCase() + params.trending.slice(1);

  return (
    <div className='bg-[#080808]'>
      <div className='flex flex-col justify-center pl-10 w-full h-80 bg-[url("/trending/common-banner.webp")] *:text-white'>
        <h3 className='font-medium'>Home / {trendingUpperCase}</h3>
        <h3 className='text-3xl font-semibold mt-2'>{params.trending}</h3>
        <p className='mt-3'>
          A speaker description typically includes details about the
          individual's expertise, experience, and speaking style. It...
        </p>
      </div>

      {/*  */}
      <div className='grid grid-cols-4 gap-10 py-16 px-6'>
        {/* filter */}
        <div className='col-span-1 border border-gray-500'>
          <div className='flex items-center gap-2 p-2.5 *:text-white *:text-2xl border-b border-b-gray-500'>
            <HiOutlineAdjustmentsHorizontal />
            <h3>Filters</h3>
          </div>

          <div className='py-3 px-2.5'>
            <h3 className='bg-[#262626] text-white text-center p-2'>
              Availability
            </h3>
            <div className='flex justify-between items-center *:text-white my-2'>
              <p>0 selected</p>
              <button>Reset</button>
            </div>

            <div className=''>
              <FormControl>
                <RadioGroup defaultValue='in' name='radio-buttons-group'>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Radio
                      value='in'
                      sx={{ color: "white" }}
                      label='In Stack'
                      variant='solid'
                    />
                    <span>5</span>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Radio
                      value='out'
                      sx={{ color: "white" }}
                      label='Out of Stock'
                      variant='solid'
                    />
                    <span>2</span>
                  </Box>
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        {/* collection */}
        <div className='col-span-3'></div>
      </div>
    </div>
  );
};

export default page;
