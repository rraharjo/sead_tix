"use client";

import React, { useState, useRef, useEffect } from "react";
import datasource from "@/source/url"
import axios from "axios";
import Sidebar from "./Sidebar";
import { speedFeatures } from "@/data/tourFilteringOptions";
import { tourDataThree, tourDataTwo } from "@/data/tours";
import Stars from "../common/Stars";
import Pagination from "../common/Pagination";
import Image from "next/image";
import Link from "next/link";

export default function TourList2() {
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  const [sortOption, setSortOption] = useState("");
  const [ddActives, setDdActives] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    const getAllEvents = async () => {
      const response = await axios.get(apiAddress + "/events/id");
      const data = response.data.return_value;
      setAllEvents(data);
    };
    getAllEvents();
  }, []);
  
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setDdActives(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <section className="layout-pb-xl">
      <div className="container">
        <div className="row">
          {/* <div className="col-xl-3 col-lg-4">
            <div className="lg:d-none">
              <Sidebar />
            </div>

            <div className="accordion d-none mb-30 lg:d-flex js-accordion">
              <div
                className={`accordion__item col-12 ${
                  sidebarActive ? "is-active" : ""
                } `}
              >
                <button
                  className="accordion__button button -dark-1 bg-light-1 px-25 py-10 border-1 rounded-12"
                  onClick={() => setSidebarActive((pre) => !pre)}
                >
                  <i className="icon-sort-down mr-10 text-16"></i>
                  Filter
                </button>

                <div
                  className="accordion__content"
                  style={sidebarActive ? { maxHeight: "2000px" } : {}}
                >
                  <div className="pt-20">
                    <Sidebar />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-xl-9 col-lg-8">
            <div className="row y-gap-5 justify-between">
              <div className="col-auto">
                <div>1362 results</div>
              </div>

              <div ref={dropDownContainer} className="col-auto">
                <div
                  className={`dropdown -type-2 js-dropdown js-form-dd ${
                    ddActives ? "is-active" : ""
                  } `}
                  data-main-value=""
                >
                  <div
                    className="dropdown__button js-button"
                    onClick={() => setDdActives((pre) => !pre)}
                  >
                    <span>Sort by: </span>
                    <span className="js-title">
                      {sortOption ? sortOption : "Featured"}
                    </span>
                    <i className="icon-chevron-down"></i>
                  </div>

                  <div className="dropdown__menu js-menu-items">
                    {speedFeatures.map((elm, i) => (
                      <div
                        onClick={() => {
                          setSortOption((pre) => (pre == elm ? "" : elm));
                          setDdActives(false);
                        }}
                        key={i}
                        className="dropdown__item"
                        data-value="fast"
                      >
                        {elm}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="row y-gap-30 pt-30">
              {allEvents.map((ev) => (
                <div key={ev.event_id} className="col-lg-4 col-sm-6">
                  <Link
                    href={`/tour-single-1/${ev.event_id}`}
                    className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
                  >
                    <div className="tourCard__header">
                      <div className="tourCard__image ratio ratio-28:20">
                        <Image
                          width={421}
                          height={301}
                          src={ev.imageSrc ? ev.imageSrc : ""}
                          alt="image"
                          className="img-ratio rounded-12"
                        />
                      </div>

                      <button className="tourCard__favorite">
                        <i className="icon-heart"></i>
                      </button>
                    </div>

                    <div className="tourCard__content px-10 pt-10">
                      <div className="tourCard__location d-flex items-center text-13 text-light-2">
                        <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                        {ev.city_name}
                      </div>

                      <h3 className="tourCard__title text-16 fw-500 mt-5">
                        <span>{ev.event_name}</span>
                      </h3>

                      <div className="tourCard__rating d-flex items-center text-13 mt-5">
                        <div className="d-flex x-gap-5">
                          <Stars star={ev.event_popularity} />
                        </div>

                        <span className="text-dark-1 ml-10">
                          {ev.event_popularity} ({ev.event_popularity})
                        </span>
                      </div>

                      <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                        <div className="d-flex items-center">
                          <i className="icon-clock text-16 mr-5"></i>
                          {ev.event_date}
                        </div>

                        <div>
                          From{" "}
                          <span className="text-16 fw-500">${ev.ticket_price}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="d-flex justify-center flex-column mt-60">
              <Pagination />

              <div className="text-14 text-center mt-20">
                Showing results 1-30 of 1,415
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
