//import { tourData } from "@/data/tours";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import axios from "axios";
import datasource from "@/source/url"
import { FaThumbtack } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';



export default async function PopulerNational() {
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  const concerts = await axios.get(apiAddress + "/events/id");
  var allEvents = concerts.data.return_value;
  return (
    <section className="layout-pt-md">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2
              data-aos="fade-right"
              data-aos-delay=""
              className="text-30 md:text-24"
            >
              Populer di Indonesia
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 justify-between pt-40 sm:pt-20 mobile-css-slider -w-300"
        >
          {allEvents.map(async (elm) => 
            (
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
                    <i className="d-flex text-16 text-light-2 mr-5"><FaThumbtack /></i>
                    {elm.city_name}
                  </div>

                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>{elm.event_name}</span>
                  </h3>

                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="text-16 mr-5 mb-5"><FaRegCalendarAlt /></i>
                      {elm.event_date.substring(0, 10)}
                    </div>

                    <div>
                      Mulai dari <span className="text-16 fw-500">Rp {elm.ticket_price ? elm.ticket_price : "-"}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
