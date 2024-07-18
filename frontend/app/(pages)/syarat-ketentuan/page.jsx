import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/header/Header";
import Content from "@/components/pages/terms/Content";
import PageHeader from "@/components/pages/terms/PageHeader";
import React from "react";

export const metadata = {
  title: "Syarat dan Ketentuan | Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
  description: "Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
};

export default function page() {
  return (
    <>
      <main>
        <Header />
        <PageHeader />
        <Content />
        <Footer />
      </main>
    </>
  );
}
