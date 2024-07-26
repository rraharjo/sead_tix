import DBMain from "@/components/dasboard/main";
import React from "react";

export const metadata = {
  title: "Dashboard | Seadtix Dashboard - Kelola Acara Anda Dengan Mudah",
  description: "Seadtix Dashboard - Kelola Acara Anda Dengan Mudah",
};

export default function page() {
  return (
    <>
      <main>
        <DBMain />
      </main>
    </>
  );
}
