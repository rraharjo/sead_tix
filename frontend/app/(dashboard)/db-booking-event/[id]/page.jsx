import React from "react";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Booking Specific | Seadtix Dashboard - Kelola Acara Anda Dengan Mudah",
  description: "Seadtix Dashboard - Kelola Acara Anda Dengan Mudah",
};

const DbBookingSpecific = dynamic(() => import('@/components/dasboard/DbBooking'), { ssr: false });

export default function BookingEventPage() {
  return (
    <>
      <main>
        <DbBookingSpecific isSpecific={true} />
      </main>
    </>
  );
}
