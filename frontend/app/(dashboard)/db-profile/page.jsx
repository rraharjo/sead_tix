import Profile from "@/components/dasboard/Profile";
import React from "react";

export const metadata = {
  title: "Profile | Seadtix Dashboard - Kelola Tiket Anda Dengan Mudah",
  description: "Seadtix Dashboard - Kelola Tiket Anda Dengan Mudah",
};

export default function page() {
  return (
    <>
      <main>
        <Profile />
      </main>
    </>
  );
}
