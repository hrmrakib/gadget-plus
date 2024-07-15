import HeroCarousel from "@/components/header/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative bg-[url('/gadget.jpg')]  h-[600px] min-w-full bg-no-repeat flex justify-center bg-cover">
        <div className='min-w-full min-h-screen bg-black bg-opacity-50 inset-0'>
          <div className='mt-8'>
            <HeroCarousel />
          </div>

          <div className='absolute top-12 left-16 animate-bounce'>
            <Image src='/blutooth-ear.avif' width={200} height={300} alt='' />
          </div>
          <div className='absolute bottom-12 right-16 animate-bounce duration-700 ease-in-out'>
            <Image src='/blutooth-head.avif' width={200} height={300} alt='' />
          </div>
        </div>
      </div>
    </>
  );
}
