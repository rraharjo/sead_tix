import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";
import TourList3 from "@/components/tours/TourList3";
import Hero from "@/components/tours/HeroCategory";
import React from "react";

export const metadata = {
  title: "Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
  description: "Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
};

export default function page() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <TourList3 />
        <Footer />
      </main>
    </>
  );
}
