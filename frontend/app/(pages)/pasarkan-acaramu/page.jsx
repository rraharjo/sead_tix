import Banner1 from "@/components/homes/banners/Banner1";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";
import Banner from "@/components/pages/about/Banner";
import Hero from "@/components/pages/about/Hero";
import Information from "@/components/pages/about/Information";
import Team from "@/components/pages/about/Team";
import React from "react";

export const metadata = {
  title: "Pasarkan Acaramu | Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
  description: "Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
};

export default function page() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Information />
        <Banner />
        <FeaturesOne />
        <div className="mt-60">
          <FeturesTwo />
        </div>
        <TestimonialOne />
        <Banner1 />
        <Team />
        <BrandsOne />
        <Footer />
      </main>
    </>
  );
}
