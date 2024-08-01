import Hero from "@/components/header/Hero";
import BigDiscount from "@/components/home/BigDiscount";
import LimitedTimeOffer from "@/components/home/LimitedTimeOffer";
import NewAndBestCollection from "@/components/home/NewAndBestCollection";
import TopNewArrivals from "@/components/home/TopNewArrivals";
import TrendingCategories from "@/components/home/TrendingCategories";
import TrendingProducts from "@/components/home/TrendingProducts";

export default function Home() {
  return (
    <div className='bg-[#080808]'>
      <Hero />
      <TrendingCategories />
      <NewAndBestCollection />
      <TrendingProducts />
      <BigDiscount />
      <TopNewArrivals />
      <LimitedTimeOffer />
    </div>
  );
}
