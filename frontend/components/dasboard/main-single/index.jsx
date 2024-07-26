"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import SidebarEvent from "../Sidebar-event";
import States from "./States";
import Activities from "./Activities";
import Statistics from "./Statistics";
import Header from "../Header";
import { statesData } from "@/data/dashboard"; // Import the mock data

export default function DBMain() {
  const { id: eventId } = useParams(); // Correct way to get route parameters
  const [sideBarOpen, setSideBarOpen] = useState(true);

  // Get the specific states data for the event
  const eventStates = statesData[eventId] || [];

  const mockEventData = {
    title: "Sample Event",
    location: "Sample Location",
    duration: "3 hours",
    gross: "Rp 9.127.000",
    // Add more mock data as needed
  };

  return (
    <div className={`dashboard ${sideBarOpen ? "-is-sidebar-visible" : ""} js-dashboard`}>
      <SidebarEvent setSideBarOpen={setSideBarOpen} eventId={eventId} />
      <div className="dashboard__content">
        <Header setSideBarOpen={setSideBarOpen} />
        <div className="dashboard__content_content">
          <h1 className="text-30">{mockEventData.title}</h1>
          <States states={eventStates} />
          <div className="row pt-30 y-gap-30">
            <Statistics eventData={mockEventData} />
            <div className="col-xl-4 col-lg-12 col-md-6">
              <div className="px-30 py-25 rounded-12 bg-white shadow-2">
                <div className="d-flex items-center justify-between">
                  <div className="text-18 fw-500">Recent Bookings</div>
                </div>
                <Activities eventData={mockEventData} />
                <div className="pt-40">
                  <button className="button -accent-3 -md col-12">
                    View More
                    <i className="icon-arrow-top-right text-16 ml-10"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-30">
            © Copyright Seadtix {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
}
