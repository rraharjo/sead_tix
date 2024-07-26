import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";
import PageHeader from "@/components/tours/PageHeader";
import TourList2 from "@/components/tours/TourList2";
import TourTypes from "@/components/tours/TourTypes";
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
        <PageHeader />
        <div className="container mb-40">
          <TourTypes />
        </div>
        <TourList2 />
        <Footer />
      </main>
    </>
  );
}
