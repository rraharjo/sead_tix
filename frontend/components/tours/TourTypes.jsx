"use client";

import { tagData } from "@/data/destinations";
import { useState, useEffect, useRef } from "react";
import RangeSlider from "../common/RangeSlider";
import Calender from "../common/dropdownSearch/Calender";
import React from "react";

export default function TourTypes() {
  const dropDownContainer2 = useRef();
  const [curentDD, setCurentDD] = useState("");

  return (
    <div>
      <div className="pl-tag__grid mobile-css-slider-2">
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
      </div>

      <div className="row custom-dd-container y-gap-20 justify-between items-center pt-30 md:pt-10 mb-30">
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
      </div>
    </div>
  );
}
