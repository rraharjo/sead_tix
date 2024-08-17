import React from "react";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Ticket Management | Seadtix Dashboard - Kelola Tiket Anda Dengan Mudah",
  description: "Seadtix Dashboard - Kelola Tiket Anda Dengan Mudah",
};

const DbTicketing = dynamic(() => import('@/components/dasboard/DbTicketing'), { ssr: false });

export default function TicketManagementPage() {
  return (
    <>
      <main>
        <DbTicketing isSpecific={true} />
      </main>
    </>
  );
}
