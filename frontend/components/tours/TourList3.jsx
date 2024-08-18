"use client";

import { FaChevronDown } from 'react-icons/fa';
import datasource from "@/source/url"
import axios from "axios";
import { filter } from "@/data/tourFilteringOptions";
import Calender from "../common/dropdownSearch/Calender";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaThumbtack } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';

export default function TourList3({ eventClassification, eventType }) {
  const [sortOption, setSortOption] = useState("");
  const [ddActives, setDdActives] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  useEffect(() => {
    const getAllEvents = async () => {
      const response = await axios.get(apiAddress + `/events/id?classification=${eventClassification}&type=${eventType}`);
      const data = response.data.return_value;
      setAllEvents(data);
    };

    getAllEvents();
  }, [eventClassification, eventType]);
  const dropDownContainer = useRef();
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const getCities = async () => {
      const response = await axios.get(apiAddress + `/location/cities`);
      const data = response.data.return_value;
      setCities(data.sort((e1, e2) => e1.event_date > e2.event_date));
    };
    getCities();
  }, []);
  const [ddActive, setDdActive] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  return (
    <>
      <section className="layout-pb-xl">
        <div className="container mt-20 mb-20">
          <h2 className="text-30 md:text-24">
            Filter by city
            <div
              className={`dropdown -type-list js-dropdown js-form-dd ${ddActive ? "is-active" : ""
                } `}
              data-main-value="Jakarta"
            >
              <div
                className="dropdown__button text-accent-1 js-button"
                onClick={() => setDdActive((pre) => !pre)}
              >
                <span style={{ marginLeft: "8px" }} className="js-title">
                  {" "}
                  {currentLocation}
                </span>
                <i className="ml-5"><FaChevronDown size="18" /> </i>
              </div>

              <div className="dropdown__menu text-16 fw-500 border-1 js-menu-items">
                  <div
                    onClick={() => {
                      setCurrentLocation("");
                    }}
                    key=""
                    className="dropdown__item"
                  >
                    None
                  </div>
                {cities.map((elm) => (
                  <div
                    onClick={() => {
                      setCurrentLocation(elm.city_name);
                    }}
                    key=""
                    className="dropdown__item"
                  >
                    {elm.city_name}
                  </div>
                ))}
              </div>
            </div>
          </h2>
        </div>
        <div className="container">
          <div className="row custom-dd-container justify-between items-center relative z-5">
            <div className="col-auto">
              <div className="row custom-dd-container x-gap-10 y-gap-10 items-center">

                <div className="col-auto">
                  <div
                    className="dropdown -base -date js-calendar js-form-dd js-dropdown js-dont-close"
                    data-main-value=""
                  >
                    {/*<div className="dropdown__button h-50 min-w-auto js-button">
                      <div>
                        <span className="js-first-date">
                        <Calender />
                        </span>
                        <span className="js-last-date"></span>
                      </div>
                      <i className="icon-chevron-down ml-10"></i>
                    </div>*/}
                  </div>
                </div>
              </div>
            </div>

            <div ref={dropDownContainer} className="col-auto">
              <div
                className={`dropdown -type-2 js-dropdown js-form-dd ${ddActives ? "is-active" : ""
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
                  {filter.map((elm, i) => (
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
            {allEvents.map((elm) => {
              if (currentLocation === "" || elm.city_name === currentLocation)
                return (
                  <div key={elm.event_id} className="col-lg-3 col-md-6">
                    <Link
                      href={`/event-single/${elm.event_id}`}
                      className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
                    >
                      <div className="tourCard__header">
                        <div className="tourCard__image ratio ratio-28:20">
                          <Image
                            width={421}
                            height={301}
                            src=""
                            alt="image"
                            className="img-ratio rounded-12"
                          />
                        </div>

                        {/* <button className="tourCard__favorite">
                      <i className="icon-heart"></i>
                    </button> */}
                      </div>

                      <div className="tourCard__content px-10 pt-10">
                        <div className="tourCard__location d-flex items-center text-13 text-light-2">
                          <i className="d-flex text-16 text-light-2 mr-5"><FaThumbtack /></i>
                          {elm.city_name}
                        </div>

                        <h3 className="tourCard__title text-16 fw-500 mt-5">
                          <span>{elm.event_name}</span>
                        </h3>

                        <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                          <div className="d-flex items-center">
                            <i className="text-16 mr-5 mb-5"><FaRegCalendarAlt /></i>
                            {elm.event_date?.slice(0, 10)}
                          </div>

                          <div>
                            Mulai dari <span className="text-16 fw-500">Rp {elm.ticket_price}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
