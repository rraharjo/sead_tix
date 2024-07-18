import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";
import Activity from "@/components/pages/helpCenter/Activity";
import Faq from "@/components/pages/helpCenter/Faq";
import Hero from "@/components/pages/helpCenter/Hero";
import React from "react";

export const metadata = {
  title: "FAQ | Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
  description: "Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
};

export default function page() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Activity />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
