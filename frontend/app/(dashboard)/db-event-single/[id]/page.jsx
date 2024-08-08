import React from "react";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Dashboard Event | Seadtix Dashboard - Kelola Tiket Anda Dengan Mudah",
  description: "Seadtix Dashboard - Kelola Tiket Anda Dengan Mudah",
};

const DBMain = dynamic(() => import('@/components/dasboard/main-single/index'), { ssr: false });

export default function EventDashboardPage() {
  return (
    <>
      <main>
        <DBMain />
      </main>
    </>
  );
}
