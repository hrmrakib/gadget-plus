import Hero from "@/components/header/Hero";
import TrendingCategories from "@/components/home/TrendingCategories";

export default function Home() {
  return (
    <div className='bg-[#080808]'>
      <Hero />
      <TrendingCategories />
    </div>
  );
}
