"use client";

import datasource from "@/source/url"
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Image from "@/components/eventSingle/ImageClient";
import Link from "next/link";
import { FaThumbtack } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';

export default function TourList3Search({ eventName }) {
  const [ddActives, setDdActives] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  useEffect(() => {
    const getAllEvents = async () => {
      const response = await axios.get(apiAddress + `/events/search?name=${eventName}`);
      const data = response.data.return_value;
      setAllEvents(data);
    };

    getAllEvents();
  });
  const dropDownContainer = useRef();
  return (
    <>
      <section className="layout-pb-xl">
        <div className="container">
          <div className="row y-gap-30 pt-30">
            {allEvents.map((elm) => {
                return (
                  <div key={elm.event_id} className="col-lg-3 col-md-6">
                    <Link
                      href={`/event-single/${elm.event_id}`}
                      className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
                    >
                      <div className="tourCard__header">
                        <div className="tourCard__image ratio ratio-28:20">
                          <Image
                            eventID={elm.event_id}
                          />
                        </div>
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
