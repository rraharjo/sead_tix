import Header from "@/components/layout/header/Header";
import Hero from "@/components/homes/heros/Hero";
import PopulerNational from "@/components/homes/events/PopulerNational";
import Category from "@/components/homes/categories/Category";
import PopulerCity from "@/components/homes/events/PopulerCity";
import Musik from "@/components/homes/events/Musik";
import Olahraga from "@/components/homes/events/Olahraga";
import Pertunjukan from "@/components/homes/events/Pertunjukan";


import ArticlesThree from "@/components/homes/articles/ArticlesThree";
import Banner1 from "@/components/homes/banners/Banner1";
import Footer from "@/components/layout/footers/Footer";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PopulerNational />
      <PopulerCity />
      <Musik />
      <Olahraga />
      <Pertunjukan />
      <Banner1 />
      {/* <ArticlesThree /> */}
      <Footer />
    </main>
  );
}
