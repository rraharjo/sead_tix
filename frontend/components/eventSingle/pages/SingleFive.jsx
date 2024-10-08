"use client";

import axios from "axios";
import datasource from "@/source/url"
import React, { useState, useEffect } from "react";
import TourSingleSidebar from "../TourSingleSidebar";
import CommentBox from "../CommentBox";
import Reviews from "../Reviews";
import Rating from "../Rating";
import Faq from "../Faq";
import DateCalender from "../DateCalender";
import RoadMap from "../RoadMap";
import OthersInformation from "../OthersInformation";
import Deskripsi from "../Overview";
import Gallery4 from "../Galleries/Gallery4";

const tabButtons = [
  "Deskripsi"
];

export default function SingleFive({ eventID }) {
  const [activeTab, setActiveTab] = useState("Deskripsi");
  return (
    <>
      <Gallery4 eventID={eventID} />

      <section className="layout-pt-md js-pin-container">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-lg-8">
              <div className="tabs -tourSingle js-tabs">
                <div className="tabs__controls row x-gap-30 y-gap-10 js-tabs-controls">
                  {tabButtons.map((elm, i) => (
                    <div
                      onClick={() => setActiveTab(elm)}
                      key={i}
                      className="col-auto"
                    >
                      <button
                        className={`tabs__button text-30 md:text-20 fw-700 js-tabs-button ${
                          elm == activeTab ? "is-tab-el-active" : ""
                        }`}
                        data-tab-target=".-tab-item-1"
                      >
                        {elm}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="tabs__content pt-40 js-tabs-content">
                  <div
                    className={`tabs__pane ${
                      activeTab == "Deskripsi" ? "is-tab-el-active" : ""
                    }`}
                  >

                    <Deskripsi eventID = {eventID}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                style={{ height: "100%" }}
                className="d-flex justify-end toursingle5"
              >
                <div
                  style={{ position: "sticky", top: "10px" }}
                  className="-top-320"
                >
                  <TourSingleSidebar eventID={eventID}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
