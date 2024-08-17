"use client";
import Image from "next/image";
const ddlocations = ["Jakarta", "Solo", "Jogja"];
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from 'react-icons/fa';


export default function Hero({eventType}) {
  const [ddActive, setDdActive] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("Jakarta");

  return (
    <>
      <section className="pageHeader -type-2 -secondary">
        <div className="pageHeader__bg">
          <Image
            width={1800}
            height={350}
            src="/img/pageHeader/2.jpg"
            alt="image"
          />
          <Image
            width="1800"
            height="40"
            src="/img/hero/1/shape.svg"
            style={{ height: "auto" }}
            alt="image"
          />
        </div>

        <div className="container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="pageHeader__content">
                <h1 className="pageHeader__title">{eventType}</h1>

                <p className="pageHeader__text">
                  A tropical paradise made for animal lovers replete with monkey
                  caves, dog foundations, and dolphins in the wild.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* <div className="container pl-tag__grid mobile-css-slider-2 mt-40">
        {tagData.map((elm, i) => (
          <div key={i} className="">
            <a href="#" className="pl-tag">
              <div className="pl-tag__icon">
                <i className={`${elm.icon} text-24 text-light-1`}></i>
              </div>

              <div className="pl-tag__title">{elm.title}</div>
            </a>
          </div>
        ))}
      </div> */}

      <div className="container mt-20 mb-20">
        <h2 className="text-30 md:text-24">
          Semua event Sepak Bola di 
          <div
            className={`dropdown -type-list js-dropdown js-form-dd ${
              ddActive ? "is-active" : ""
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
              <i className="ml-5"><FaChevronDown size="18"/> </i>
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
    </>
  );
}
