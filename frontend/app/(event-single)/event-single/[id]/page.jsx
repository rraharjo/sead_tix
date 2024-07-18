import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";
import PageHeader from "@/components/eventSingle/PageHeader";
import TourSlider from "@/components/eventSingle/TourSlider";
import SingleFive from "@/components/eventSingle/pages/SingleFive";
import { allTour } from "@/data/tours";

import React from "react";

export const metadata = {
  title: "Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
  description: "Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
};

export default function page({ params }) {
  const id = params.id;
  const tour = allTour.find((item) => item.id == id) || allTour[0];

  return (
    <>
      <main>
        <Header />
        <PageHeader />

        <SingleFive tour={tour} />
        {/* <TourSlider /> */}
        <PageHeader />
        <Footer />
      </main>
    </>
  );
}
