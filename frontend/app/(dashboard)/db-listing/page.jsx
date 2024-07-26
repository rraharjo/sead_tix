import DBListing from "@/components/dasboard/DBListing";
import React from "react";

export const metadata = {
  title: "Listing | Seadtix Dashboard - Kelola Acara Anda Dengan Mudah",
  description: "Seadtix Dashboard - Kelola Acara Anda Dengan Mudah",
};

export default function page() {
  return (
    <>
      <main>
        <DBListing />
      </main>
    </>
  );
}
