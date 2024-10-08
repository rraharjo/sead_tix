"use client"
import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";
import TourList3 from "@/components/tours/TourList3_search";
import Hero from "@/components/tours/HeroCategory";
import React from "react";
import { useSearchParams } from "next/navigation";

/*export const metadata = {
  title: "Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
  description: "Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
};*/

export default function page() {
  const searchParams = useSearchParams();
  return (
    <>
      <main>
        <Header />
        <Hero eventType={searchParams.get("name")}/>
        <TourList3 eventName={searchParams.get("name")}/>
        <Footer />
      </main>
    </>
  );
}
