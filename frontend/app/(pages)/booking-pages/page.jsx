import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";
import BookingPages from "@/components/pages/BookingPages";
import React from "react";

export const metadata = {
  title: "Booking-page | Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
  description: "Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
};

export default function page() {
  return (
    <>
      <main>
        <Header />
        <BookingPages />
        <Footer />
      </main>
    </>
  );
}
