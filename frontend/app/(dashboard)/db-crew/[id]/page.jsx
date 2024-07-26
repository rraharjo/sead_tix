import React from "react";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Crew Management | Seadtix Dashboard - Kelola Acara Anda Dengan Mudah",
  description: "Seadtix Dashboard - Kelola Acara Anda Dengan Mudah",
};

const DbCrew = dynamic(() => import('@/components/dasboard/DbCrew'), { ssr: false });

export default function CrewManagementPage() {
  return (
    <>
      <main>
        <DbCrew isSpecific={true} />
      </main>
    </>
  );
}
