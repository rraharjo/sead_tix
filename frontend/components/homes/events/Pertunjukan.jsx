"use client";

import React from "react";
import { useEffect, useState } from "react";
import datasource from "@/source/url"
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { tourData } from "@/data/tours";
import Image from "@/components/eventSingle/ImageClient";
import Link from "next/link";
import { FaThumbtack } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export default function Pertunjukan() {
  const [shows, setShow] = useState([]);
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  useEffect(() => {
    const getShowEvents = async () => {
      const response = await axios.get(apiAddress + "/events/id?classification=show");
      const data = response.data.return_value;
      setShow(data);
    };
    if (shows.length == 0) {
      getShowEvents();
    };
  });
  return (
    <section className="layout-pt-sm">
      <div className="container">
        <div className="row y-gap-10 justify-between items-center y-gap-10">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24"
            >
              Pertunjukan
            </h2>
          </div>
        </div>

        <div className="relative pt-40 sm:pt-20">
          <div
            data-aos="fade-up"
            data-aos-delay=""
            className="overflow-hidden js-section-slider"
          >
            <div className="swiper-wrapper">
              <Swiper
                spaceBetween={30}
                className="w-100"
                navigation={{
                  prevEl: ".pbp1",
                  nextEl: ".pbn1",
                }}
                modules={[Navigation]}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {shows.map((elm) => (
                  <SwiperSlide key={elm.event_id}>
                    <Link
                      href={`/event-single/${elm.id}`}
                      className="tourCard -type-1 d-block bg-white"
                    >
                      <div className="tourCard__header">
                        <div className="tourCard__image ratio ratio-28:20">
                          <Image
                            eventID={elm.event_id}
                          />
                        </div>
                      </div>

                      <div className="tourCard__content pt-10">
                        <div className="tourCard__location d-flex items-center text-13 text-light-2">
                          <i className="d-flex text-16 text-light-2 mr-5"><FaThumbtack/></i>
                          {elm.venue_name}
                        </div>

                        <h3 className="tourCard__title text-16 fw-500 mt-5">
                          <span>{elm.event_name}</span>
                        </h3>

                        <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                          <div className="d-flex items-center">
                            <i className="text-16 mr-5 mb-5"><FaRegCalendarAlt/></i>
                            {elm.event_date}
                          </div>

                          <div>
                            Mulai dari <span className="text-16 fw-500">Rp {elm.ticket_price}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="navAbsolute">
            <button className="navAbsolute__button bg-white js-slider1-prev pbp1">
              <i className="text-14"><FaArrowLeft/></i>
            </button>

            <button className="navAbsolute__button bg-white js-slider1-next pbn1">
            <i className="text-14"><FaArrowRight/></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
