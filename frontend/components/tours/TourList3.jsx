"use client";

import { filter } from "@/data/tourFilteringOptions";
import { tourData } from "@/data/tours";
import Calender from "../common/dropdownSearch/Calender";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaThumbtack } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';

export default function TourList3() {
  const [sortOption, setSortOption] = useState("");
  const [ddActives, setDdActives] = useState(false);
  const dropDownContainer = useRef();
  return (
    <>
      <section className="layout-pb-xl">
        <div className="container">
          <div className="row custom-dd-container justify-between items-center relative z-5">
            <div className="col-auto">
              <div className="row custom-dd-container x-gap-10 y-gap-10 items-center">

                <div className="col-auto">
                  <div
                    className="dropdown -base -date js-calendar js-form-dd js-dropdown js-dont-close"
                    data-main-value=""
                  >
                    <div className="dropdown__button h-50 min-w-auto js-button">
                      <div>
                        <span className="js-first-date">
                          <Calender />
                        </span>
                        <span className="js-last-date"></span>
                      </div>
                      <i className="icon-chevron-down ml-10"></i>
                    </div>
                  </div>
                </div>
              </div>
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
            {tourData.map((elm, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <Link
                  href={`/event-single/${elm.id}`}
                  className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
                >
                  <div className="tourCard__header">
                    <div className="tourCard__image ratio ratio-28:20">
                      <Image
                        width={421}
                        height={301}
                        src={elm.imageSrc}
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
                      <i className="d-flex text-16 text-light-2 mr-5"><FaThumbtack/></i>
                      {elm.location}
                    </div>

                    <h3 className="tourCard__title text-16 fw-500 mt-5">
                      <span>{elm.title}</span>
                    </h3>

                    <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                      <div className="d-flex items-center">
                        <i className="text-16 mr-5 mb-5"><FaRegCalendarAlt/></i>
                        {elm.duration}
                      </div>

                      <div>
                        Mulai dari <span className="text-16 fw-500">Rp {elm.price}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
