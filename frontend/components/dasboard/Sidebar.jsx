"use client";

import { sidebarItems } from "@/data/dashboard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

export default function Sidebar({ setSideBarOpen }) {
  const pathname = usePathname();
  return (
    <div className="dashboard__sidebar bg-accent-1-dark js-dashboard-sidebar">
      <div className="dashboard__sidebar_header">
        <span
          onClick={() => setSideBarOpen(false)}
          class="text-white closeSidebar"
        >
          &times;
        </span>
        <Link href={"/db-main"}>
        <Image
                width="100"
                height="100"
                src="/img/general/logo-1.svg"
                alt="SeadTix Logo"
                priority
              />
        </Link>
      </div>

      <div className="sidebar fw-500 text-15 -dashboard">
        {sidebarItems.map((elm, i) => (
          <div
            key={i}
            className={`sidebar__item mt-10 ${
              pathname == elm.href ? "-is-active" : ""
            } `}
          >
            <Link href={elm.href}>
              <i className={elm.iconClass}></i>
              <span className="ml-10">{elm.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
