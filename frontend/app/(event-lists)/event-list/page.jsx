import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";
import PageHeader from "@/components/tours/PageHeader";
import TourList2 from "@/components/tours/TourList2";
import TourTypes from "@/components/tours/TourTypes";
import React from "react";

export const metadata = {
  title: "Tour-list-3 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
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
