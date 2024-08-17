import React from "react";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Event Gating | Seadtix Dashboard - Kelola Tiket Anda Dengan Mudah",
  description: "Seadtix Dashboard - Kelola Tiket Anda Dengan Mudah",
};

const DbGating = dynamic(() => import('@/components/dasboard/DbGating'), { ssr: false });

export default function GatingPage() {
  return (
    <>
      <main>
        <DbGating />
      </main>
    </>
  );
}
