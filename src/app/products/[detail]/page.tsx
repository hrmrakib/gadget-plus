import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import FormControl from "@mui/joy/FormControl";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { Box } from "@mui/joy";
import { radioClasses } from "@mui/joy/Radio";
import Sheet from "@mui/joy/Sheet";
import Done from "@mui/icons-material/Done";
import { MdTableRows } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import React from "react";
import { FaEye, FaHeart, FaPlus, FaStar } from "react-icons/fa";
import { useState } from "react";
import FilterDrawer from "./FilterDrawer";

const params = {
  trending: "iPhone",
};

const GadgetDynamic = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };


  const trendingUpperCase =
    params.trending.charAt(0).toUpperCase() + params.trending.slice(1);

  return (
    <div className='bg-[#080808]'>
      {/* Filter Drawer */}
      <FilterDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />

      <div className='flex flex-col justify-center pl-10 w-full h-80 bg-[url("/trending/common-banner.webp")] *:text-white'>
        <h3 className='font-medium'>Home / {trendingUpperCase}</h3>
        <h3 className='text-3xl font-semibold mt-2'>{params.trending}</h3>
        <p className='mt-3 text-xl'>
          A speaker description typically includes details about the
          individual's expertise, experience, and speaking style. It...
        </p>
      </div>

      {/*  */}
      <div className='grid grid-cols-4 gap-10 py-16 px-6'>
        {/* filter */}
        <div className='hidden md:block col-span-1 border border-gray-500'>
          <div className='flex items-center gap-2 p-2.5 *:text-white text-lg lg:*:text-2xl border-b border-b-gray-500'>
            <HiOutlineAdjustmentsHorizontal />
            <h3>Filters</h3>
          </div>

          {/* availability */}
          <div className='py-3 px-2.5 border-b border-b-gray-500'>
            <h3 className='bg-[#262626] text-white text-sm lg:text-base font-semibold text-center uppercase p-2'>
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
                      sx={{
                        color: "white",
                        fontSize: { sm: "12px", md: "16px" },
                      }}
                      label='In Stack'
                      variant='solid'
                    />
                    <span className='text-white'>5</span>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Radio
                      value='out'
                      sx={{
                        color: "white",
                        fontSize: { sm: "12px", md: "16px" },
                      }}
                      label='Out of Stock'
                      variant='solid'
                    />
                    <span className='text-white'>2</span>
                  </Box>
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          {/* price */}
          <div className='py-3 px-2.5 border-b border-b-gray-500'>
            <h3 className='bg-[#262626] text-white text-sm lg:text-base font-semibold text-center uppercase p-2'>
              Price
            </h3>
            <div className='flex justify-between items-center gap-2 *:text-white my-2'>
              <p>The highest price is $35.00</p>
              <button>Reset</button>
            </div>

            <div className='w-full flex items-center justify-between gap-3'>
              <div>
                <label className='text-white' htmlFor=''>
                  Min price:
                </label>
                <input
                  className='w-full bg-transparent outline-none border border-gray-500 rounded-sm text-white p-2 mt-2'
                  type='number'
                  placeholder='$0.00'
                />
              </div>
              <div>
                <label className='text-white' htmlFor=''>
                  Min price:
                </label>
                <input
                  className='w-full bg-transparent outline-none border border-gray-500 rounded-sm text-white p-2 mt-2'
                  type='number'
                  placeholder='$100.00'
                />
              </div>
            </div>
          </div>

          {/* product type */}
          <div className='py-3 px-2.5 border-b border-b-gray-500'>
            <h3 className='bg-[#262626] text-white text-sm lg:text-base font-semibold text-center uppercase p-2'>
              Product type
            </h3>
            <div className='flex justify-between items-center *:text-white my-2'>
              <p>0 selected</p>
              <button>Reset</button>
            </div>

            <div className=''>
              <FormControl>
                <RadioGroup name='radio-buttons-group'>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Radio
                      value='in'
                      sx={{
                        color: "white",
                        fontSize: { sm: "12px", md: "16px" },
                      }}
                      label='Speaker'
                      variant='solid'
                    />
                    <span className='text-white'>5</span>
                  </Box>
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          {/* brand */}
          <div className='py-3 px-2.5 border-b border-b-gray-500'>
            <h3 className='bg-[#262626] text-white text-sm lg:text-base text-center font-semibold uppercase p-2'>
              Brand
            </h3>
            <div className='flex justify-between items-center *:text-white my-2'>
              <p>0 selected</p>
              <button>Reset</button>
            </div>

            <div className=''>
              <FormControl>
                <RadioGroup name='radio-buttons-group'>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Radio
                      value='in'
                      sx={{
                        color: "white",
                        fontSize: { sm: "12px", md: "16px" },
                      }}
                      label='Brand name 1'
                      variant='solid'
                    />
                    <span className='text-white'>5</span>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Radio
                      value='out'
                      sx={{
                        color: "white",
                        fontSize: { sm: "12px", md: "16px" },
                      }}
                      label='Brand name 2'
                      variant='solid'
                    />
                    <span className='text-white'>2</span>
                  </Box>
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          {/* color */}
          <div className='py-3 px-2.5 border-b border-b-gray-500'>
            <h3 className='bg-[#262626] text-white text-sm lg:text-base text-center font-semibold uppercase p-2'>
              Color
            </h3>
            <div className='flex justify-between items-center *:text-white my-2'>
              <p>0 selected</p>
              <button>Reset</button>
            </div>

            <Box>
              <RadioGroup
                aria-labelledby='product-color-attribute'
                defaultValue='warning'
                sx={{ gap: 2, flexWrap: "wrap", flexDirection: "row" }}
              >
                {["primary", "neutral", "danger", "success", "warning"].map(
                  (color:string) => (
                    <Sheet
                      key={color}
                      sx={{
                        position: "relative",
                        width: 30,
                        height: 30,
                        flexShrink: 0,
                        bgcolor: `${color}.solidBg`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Radio
                        overlay
                        variant='solid'
                        color={color}
                        checkedIcon={<Done fontSize='xl2' />}
                        value={color}
                        slotProps={{
                          input: { "aria-label": color },
                          radio: {
                            sx: {
                              display: "contents",
                              "--variant-borderWidth": "2px",
                            },
                          },
                        }}
                        sx={{
                          "--joy-focus-outlineOffset": "4px",
                          "--joy-palette-focusVisible": (theme) =>
                            theme.vars.palette[color][500],
                          [`& .${radioClasses.action}.${radioClasses.focusVisible}`]:
                            {
                              outlineWidth: "2px",
                            },
                        }}
                      />
                    </Sheet>
                  )
                )}
              </RadioGroup>
            </Box>
          </div>

          {/* custom level */}
          <div className='py-3 px-2.5 border-b border-b-gray-500'>
            <h3 className='bg-[#262626] text-white text-sm lg:text-base font-semibold text-center uppercase p-2'>
              Custom
            </h3>
            <div className='flex justify-between items-center *:text-white my-2'>
              <p>0 selected</p>
              <button>Reset</button>
            </div>

            <div className=''>
              <FormControl>
                <RadioGroup name='radio-buttons-group'>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Radio
                      value='in'
                      sx={{
                        color: "white",
                        fontSize: { sm: "12px", md: "16px" },
                      }}
                      label='New'
                      variant='solid'
                    />
                    <span className='text-white'>5</span>
                  </Box>
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        {/* collection */}
        <div className='col-span-4 md:col-span-3'>
          <div className='flex justify-between items-center py-2 lg:py-3 px-2 lg:px-2.5 md:border border-gray-500'>
            {/* filter for mobile */}
            <div
              onClick={toggleDrawer}
              className='flex md:hidden items-center gap-2 p-2.5 *:text-white text-lg lg:*:text-2xl border border-gray-500'
            >
              <HiOutlineAdjustmentsHorizontal />
            </div>

            {/* products header filter */}
            <div className='flex items-center gap-2 *:text-white'>
              <div onClick={()=>setViewMode(true)} className={`${viewMode && "bg-[#262626]"} border p-2 border-gray-600 rounded-sm cursor-pointer`}>
                <IoGridOutline />
              </div>
              <div onClick={()=>setViewMode(false)} className={`${!viewMode && "bg-[#262626]"} border p-2 border-gray-600 rounded-sm cursor-pointer`}>
                <MdTableRows />
              </div>

              <p className='hidden md:block'>
                <span className='font-semibold'>5</span> products viewed
              </p>
            </div>

            <div className='hidden md:block'>
              <span className='text-white '>Sort by:</span>
              <select
                className='bg-[#080808] border border-gray-600 ml-4 text-white outline-none p-2'
                id='dropdown'
              >
                <option value='option1'>Best Selling</option>
                <option value='option2'>Alphabetically, A - Z</option>
                <option value='option2'>Alphabetically, Z - A</option>
                <option value='option3'>Price, high to low</option>
                <option value='option3'>Price, low to high</option>
                <option value='option3'>Date, old to new</option>
                <option value='option3'>Date, new to old</option>
              </select>
            </div>
          </div>

          {/* products - cloumn view*/}
          {viewMode && <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {[1, 2, 3].map((v, i) => (
              <div key={i} className='bg-[#1c1c1c] p-5'>
                <div className='bg-[#262626] flex flex-col items-center justify-center gap-2'>
                  <img
                    src='/ultramax-watch.avif'
                    className='w-full h-60 lg:h-72'
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
                <h3 className='text-2xl text-red-700 font-semibold my-2'>
                  $56.00
                </h3>
                <hr />
                <div className='flex items-center justify-center my-2 gap-5 *:text-blue-700 *:text-lg'>
                  <FaHeart />
                  <FaEye />
                </div>
              </div>
            ))}
          </div> }

          {/* products - row view*/}
          {!viewMode && <div className='mt-10 grid grid-cols-1 gap-10'>
            {[1, 2, 3].map((v, i) => (
              <div key={i} className='bg-[#1c1c1c] p-5 flex flex-col lg:flex-row items-center justify-between gap-10'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-7'>
                <div className='bg-[#262626] w-60 h-60'>
                  <img
                    src='/computer.jpg'
                    className='w-full h-full p-6 zooming'
                    width={220}
                    height={350}
                    alt='ultra'
                  />
                  </div>
                  <div className="max-w-80">
                    <h2 className='text-2xl text-white font-semibold my-2'>
                      Ultra max 2.01 Big Diaplay
                    </h2>
                    <p className="text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident, explicabo sequi mollitia voluptatem earum!</p>
                  </div>
                </div>

                <div>
                <div className='flex items-center gap-1 *:text-orange-500'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3 className='text-2xl text-red-700 font-semibold my-2'>
                  $56.00
                </h3>
                <hr />
                <div className='flex items-center justify-center my-2 gap-5 *:text-blue-700 *:text-lg'>
                  <FaHeart />
                  <FaEye />
                </div>
                <button className='w-full flex items-center justify-center gap-3 py-2 border border-gray-700 text-white'>
                    <FaPlus />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>}

        </div>
      </div>
    </div>
  );
};

export default GadgetDynamic;
