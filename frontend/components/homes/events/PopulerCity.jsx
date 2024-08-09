"use client";

import { tourData } from "@/data/tours";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import datasource from "@/source/url"
const ddlocations = ["Jakarta", "Central Java", "Bali"];
import { FaThumbtack } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

export default function PopulerCity() {
  const [ddActive, setDdActive] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(ddlocations[0]);
  const [eventsByCity, setEventsByCity] = useState([]);
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  useEffect(() => {
    async function getEventsbyCity() {
      const location = currentLocation;
      const response = await axios.get(apiAddress + `/events/id?state=${location}`);
      const data = response.data.return_value;
      if (data) {
        setEventsByCity(data);
      }
      else {
        setEventsByCity([]);
      }
    }
    getEventsbyCity();
  }, [currentLocation]);
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setDdActive(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <section className="layout-pt-md layout-pb-sm">
      <div className="container">
        <div className="row y-gap-10 justify-between items-center y-gap-10">
          <div ref={dropDownContainer} className="col-auto">
            <h2 className="text-30 md:text-24">
              Terpopuler di
              <div
                className={`dropdown -type-list js-dropdown js-form-dd ${ddActive ? "is-active" : ""
                  } `}
                data-main-value="london"
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
                  {ddlocations.map((elm, i) => (
                    <div
                      onClick={() => {
                        setCurrentLocation(elm);
                        setDdActive(false);
                      }}
                      key={i}
                      className="dropdown__item"
                    >
                      {elm}
                    </div>
                  ))}
                </div>
              </div>
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 pt-40 sm:pt-20"
        >
          {eventsByCity
            .map((e) => (
              <div key={e.event_id} className="col-lg-3 col-md-6">
                <a
                  href={`/event-single/${e.event_id}`}
                  className="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow"
                >
                  <div className="tourCard__header">
                    <div className="tourCard__image ratio ratio-28:20">
                      <Image
                        width={421}
                        height={301}
                        src={e.imageSrc}
                        alt="image"
                        className="img-ratio"
                      />
                    </div>

                    {/* <button className="tourCard__favorite">
                      <i className="icon-heart"></i>
                    </button> */}
                  </div>

                  <div className="tourCard__content px-20 py-10">
                    <div className="tourCard__location d-flex items-center text-13 text-light-2">
                      <i className="d-flex text-16 text-light-2 mr-5"><FaThumbtack /></i>
                      {e.city_name}
                    </div>

                    <h3 className="tourCard__title text-16 fw-500 mt-5">
                      <span>{e.event_name}</span>
                    </h3>

                    {/* <div className="tourCard__rating text-13 mt-5">
                      <div className="d-flex items-center">
                        <div className="d-flex x-gap-5">
                          <Stars star={elm.rating} />
                        </div>

                        <span className="text-dark-1 ml-10">
                          {elm.rating} ({elm.ratingCount})
                        </span>
                      </div>
                    </div> */}

                    <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                      <div className="d-flex items-center">
                        <i className="text-16 mr-5 mb-5"><FaRegCalendarAlt /></i>
                        {e.event_date.substring(0, 10)}
                      </div>

                      <div>
                        Mulai dari{" "}
                        <span className="text-16 fw-500">Rp {e.ticket_price}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
