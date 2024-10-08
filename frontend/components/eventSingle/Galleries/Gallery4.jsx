"use client";

import axios from "axios";
import datasource from "@/source/url"
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "@/components/eventSingle/ImageClient";
import { El_Messiri } from "next/font/google";
const images = [
  "/img/tourSingle/2/2.png",
  "/img/tourSingle/2/1.png",
  "/img/tourSingle/2/3.png",
];
export default function Gallery4({ eventID }) {
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  const [theEvent, setTheEvent] = useState([]);
  useEffect(() => {
    const getTheEvent = async () => {
      const response = await axios.get(apiAddress + `/events/id/${eventID}`);
      const data = response.data.return_value[0];
      setTheEvent(data);
    };
    getTheEvent();
  }, []);
  return (
    <section className="tourSingleHero5">
      <div className="tourSingleHero5__image">
        <div
          className="js-section-slider"
          data-gap="0"
          data-slider-cols="xl-1 lg-1 md-1 sm-1 base-1"
          data-loop
          data-nav-prev="js-slider1-prev"
          data-nav-next="js-slider1-next"
        >
          <Image
            eventID={eventID}
          />
        </div>

      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">

            <h2 className="text-40 sm:text-30 lh-14 text-white mt-20">
              {theEvent.event_name}
              <br />
              {theEvent.event_name}
            </h2>

            <div className="row y-gap-20 justify-between items-center pt-20">
              <div className="col-auto">
                <div className="row x-gap-20 y-gap-20 items-center">
                  {/* <div className="col-auto">
                    <div className="d-flex items-center text-white">
                      <div className="d-flex x-gap-5 pr-10">
                        <Stars star={5} font={12} />
                      </div>
                      {tour?.rating} ({tour.ratingCount})
                    </div>
                  </div> */}

                  <div className="col-auto">
                    <div className="d-flex items-center text-white">
                      <i className="icon-pin text-16 mr-5"></i>
                      {theEvent.city_name}, {theEvent.state_name}
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center text-white">
                      <i className="icon-reservation text-16 mr-5"></i>
                      {theEvent.venue_name}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex x-gap-30 y-gap-10">
                  <a href="#" className="d-flex items-center text-white hover-gold">
                    <i className="icon-share flex-center text-16 mr-10"></i>
                    Share
                  </a>

                  {/* <a href="#" className="d-flex items-center text-white">
                    <i className="icon-heart flex-center text-16 mr-10"></i>
                    Wishlist
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
