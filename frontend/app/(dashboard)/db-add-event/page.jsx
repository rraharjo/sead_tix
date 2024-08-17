import AddEvent from "@/components/dasboard/AddEvent";
import React from "react";

export const metadata = {
  title: "Add Event | Seadtix Dashboard - Kelola Tiket Anda Dengan Mudah",
  description: "Seadtix Dashboard - Kelola Tiket Anda Dengan Mudah",
};

export default function page() {
  return (
    <>
      <main>
        <AddEvent />
      </main>
    </>
  );
}
