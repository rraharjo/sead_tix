"use client";

import { eventSidebarItems } from "@/data/dashboard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

export default function SidebarEvent({ setSideBarOpen, eventId }) {
  const pathname = usePathname();
  const items = eventSidebarItems(eventId); // Pass eventId to get the correct links

  return (
    <div className="dashboard__sidebar bg-gold-1 js-dashboard-sidebar">
      <div className="dashboard__sidebar_header">
        <span
          onClick={() => setSideBarOpen(false)}
          className="text-white closeSidebar"
        >
          &times;
        </span>
        <Link href={`/db-main`}>
          <Image
            width="100"
            height="100"
            src="/img/general/logo-1-dark-2.svg"
            alt="SeadTix Logo"
            priority
          />
        </Link>
      </div>

      <div className="sidebar2 fw-500 text-dark-1 text-15 -dashboard">
        {items.map((elm, i) => (
          <div
            key={i}
            className={`sidebar__item mt-10 ${
              pathname === elm.href ? "-is-active" : ""
            } ${elm.label === "Main Dashboard" ? " text-dark-1 bg-gold-2 rounded-12" : ""}`}
          >
            <Link href={`${elm.href.replace(":id", eventId)}`}>
              <i className={elm.iconClass}></i>
              <span className="ml-10">{elm.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}