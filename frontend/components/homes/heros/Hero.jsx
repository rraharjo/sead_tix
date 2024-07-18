"use client";

import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaThumbtack } from 'react-icons/fa';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

export default function Hero() {
  const router = useRouter();
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [location, setLocation] = useState("");
  const [calender, setCalender] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setCurrentActiveDD("");
  }, [location, calender, category, setCurrentActiveDD]);

  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentActiveDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className="hero -type-1">
      <div className="hero__bg">
        <Image width={1800} height={560} src="/img/hero/1/1.png" alt="image" />
        <Image
          width="1800"
          height="40"
          src="/img/hero/1/shape.svg"
          alt="image"
          style={{ height: "auto" }}
        />
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-8 col-lg-10">
            <div className="hero__content">
              <h1
                data-aos={"fade-up"}
                data-aos-delay="100"
                className="hero__title"
              >
                Cari event favoritmu
              </h1>

              <p
                data-aos={"fade-up"}
                data-aos-delay="300"
                className="hero__text"
              >
                Temukan apa yang membuatmu bahagia kapan saja, di mana saja
              </p>

              <div
                ref={dropDownContainer}
                data-aos={"fade-up"}
                data-aos-delay="300"
                className="mt-60 md:mt-35"
              >
                <div className="searchFormsContainer">
                  <div className="searchForm -type-1">
                    <div className="searchForm__form">
                      <div className="searchFormItem js-select-control js-form-dd">
                        <div
                          className="searchFormItem__button hover-effect"
                          onClick={() =>
                            setCurrentActiveDD((pre) =>
                              pre == "location" ? "" : "location"
                            )
                          }
                        >
                          <div className="searchFormItem__icon">
                            <i><FaThumbtack size="18"/> </i>
                          </div>
                          <div className="searchFormItem__content">
                            <h5>Dimana</h5>
                            <div className="js-select-control-chosen">
                              {location ? location : "Cari Kota"}
                            </div>
                          </div>
                        </div>

                        <Location
                          setLocation={setLocation}
                          active={currentActiveDD === "location"}
                        />
                      </div>

                      <div className="searchFormItem js-select-control js-form-dd js-calendar">
                        <div
                          className="searchFormItem__button hover-effect"
                          onClick={() =>
                            setCurrentActiveDD((pre) =>
                              pre == "calender" ? "" : "calender"
                            )
                          }
                        >
                          <div className="searchFormItem__icon">
                            <i className="mb-2"><FaRegCalendarCheck size="22"/> </i>
                          </div>
                          <div className="searchFormItem__content">
                            <h5>Kapan</h5>
                            <div>
                              <span className="js-first-date">
                                <Calender
                                  active={currentActiveDD === "calender"}
                                />
                              </span>
                              <span className="js-last-date"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="searchForm -type-9">
                    <div className="searchForm__form">
                      <div className="searchFormItem js-select-control">
                        {/* <div className="searchFormItem__button"> */}
                          {/* <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                            <i className="text-20 icon-search"></i>
                          </div> */}
                          <div className="searchFormItem__content">
                            {/* <h5>Search</h5> */}
                            <div className="js-select-control-chosen">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Cari event"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                              />
                            </div>
                          </div>
                        {/* </div> */}
                      </div>
                      <div className="searchForm__button">
                        <button
                          onClick={() => router.push("/tour-list-1")}
                          className="button -dark-1 bg-accent-1 text-white"
                        >
                          <i className="mr-10"><FaSearch size="15"/> </i>
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}