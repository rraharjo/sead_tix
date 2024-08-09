"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import datasource from "@/source/url"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaThumbtack } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';


export default function Musik() {
  const [musicEvents, setMusic] = useState([]);
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  useEffect(() => {
    const getMusicEvents = async () => {
      const response = await axios.get(apiAddress + "/events/id?classification=concert");
      const data = response.data.return_value;
      //console.log("Data:", data);
      setMusic(data);
    };
    if (musicEvents.length == 0) {
      getMusicEvents();
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
              Musik
            </h2>
          </div>
        </div>

        <div className="relative pt-40 sm:pt-20">
          <div className="overflow-hidden js-section-slider">
            <div
              data-aos="fade-up"
              data-aos-delay=""
              className="swiper-wrapper"
            >
              <Swiper
                spaceBetween={30}
                className="w-100"
                navigation={{
                  prevEl: ".pbp2",
                  nextEl: ".pbn2",
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
                {musicEvents.map((e) => (
                  <SwiperSlide key={e.event_id}>
                    <Link
                      href={`/event-single/${e.event_id}`}
                      className="tourCard -type-1 d-block bg-white"
                    >
                      <div className="tourCard__header">
                        <div className="tourCard__image ratio ratio-28:20">
                          <Image
                            width={421}
                            height={301}
                            src={e.imageSrc}
                            alt="image"
                            className="img-ratio rounded-12"
                          />
                        </div>

                        {/* <button className="tourCard__favorite">
                          <i className="icon-heart"></i>
                        </button> */}
                      </div>

                      <div className="tourCard__content pt-10">
                        <div className="tourCard__location d-flex items-center text-13 text-light-2">
                          <i className="d-flex text-16 text-light-2 mr-5"><FaThumbtack /></i>
                          {e.city_name}
                        </div>

                        <h3 className="tourCard__title text-16 fw-500 mt-5">
                          <span>{e.event_name}</span>
                        </h3>

                        <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                          <div className="d-flex items-center">
                            <i className="text-16 mr-5 mb-5"><FaRegCalendarAlt /></i>
                            {e.event_date.substring(0, 10)}
                          </div>

                          <div>
                            Mulai dari <span className="text-16 fw-500">Rp {e.ticket_price ? e.ticket_price : '-'}</span>
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
            <button className="navAbsolute__button bg-white js-slider1-prev pbp2">
              <i className="text-14"><FaArrowLeft /></i>
            </button>

            <button className="navAbsolute__button bg-white js-slider1-next pbn2">
              <i className="text-14"><FaArrowRight /></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}