import Login from "@/components/pages/Login";
import React from "react";

export const metadata = {
  title: "Login | Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
  description: "Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
};

export default function page() {
  return (
    <>
      <main>
        {/* <Header3 /> */}
        <Login />
        {/* <FooterOne /> */}
      </main>
    </>
  );
}
