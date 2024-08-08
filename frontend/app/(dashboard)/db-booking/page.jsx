import React from "react";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Booking | Seadtix Dashboard - Kelola Tiket Anda Dengan Mudah",
  description: "Seadtix Dashboard - Kelola Tiket Anda Dengan Mudah",
};

const DbBooking = dynamic(() => import('@/components/dasboard/DbBooking'), { ssr: false });

export default function BookingPage() {
  return (
    <>
      <main>
        <DbBooking isSpecific={false} />
      </main>
    </>
  );
}
