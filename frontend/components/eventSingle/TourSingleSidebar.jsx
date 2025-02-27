"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { times } from "@/data/tourSingleContent";
import axios from "axios";
import datasource from "@/source/url"

export default function TourSingleSidebar({eventID}) {
  const addNumber = (num) => {
    numbers[num] += 1;
  }

  const minNumber = (num) => {
    if (numbers[num] <= 0){
      numbers[num] = 0;
      return;
    }
    numbers[num] -= 1;
  }
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  const [refresher, setRefreshser] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const [ticketTypes, setTicketTypes] = useState([]);
  useEffect(() => {
    const getShowsCategories = async () => {
      const response = await axios.get(apiAddress + `/ticket/types/${eventID}`);
      const data = response.data.return_value;
      setTicketTypes(data);
    };
    getShowsCategories();
  }, []);
  useEffect(() => {
    const numOfTicket = ticketTypes?.length;
    const placehold = new Array(numOfTicket).fill(0);
    setNumbers(placehold);
  }, [ticketTypes]);

  return (
    <div className="tourSingleSidebar">
      <div className="d-flex items-center">
        {/* <div>From</div> */}
        <div className="text-30 fw-700 text-center ">Beli Tiket</div>
      </div>

      <div className="line mt-20 mb-20"></div>

      {/* <div className="searchForm -type-1 -sidebar mt-20">
        <div className="searchForm__form">
          <div className="searchFormItem js-select-control js-form-dd js-calendar">
            <div className="searchFormItem__button" data-x-click="calendar">
              <div className="searchFormItem__icon size-50 rounded-12 bg-light-1 flex-center">
                <i className="text-20 icon-calendar"></i>
              </div>
              <div className="searchFormItem__content">
                <h5>From</h5>
                <div>
                  <span className="js-first-date">
                    <Calender />
                  </span>
                  <span className="js-last-date"></span>
                </div>
              </div>
              <div className="searchFormItem__icon_chevron">
                <i className="icon-chevron-down d-flex text-18"></i>
              </div>
            </div>
          </div>

          <div className="searchFormItem js-select-control js-form-dd">
            <div
              className="searchFormItem__button"
              onClick={() => setActiveTimeDD((pre) => !pre)}
              data-x-click="time"
            >
              <div className="searchFormItem__icon size-50 rounded-12 bg-light-1 flex-center">
                <i className="text-20 icon-clock"></i>
              </div>
              <div className="searchFormItem__content">
                <h5>Time</h5>
                <div className="js-select-control-chosen">
                  {selectedTime ? selectedTime : "Choose time"}
                </div>
              </div>
              <div className="searchFormItem__icon_chevron">
                <i className="icon-chevron-down d-flex text-18"></i>
              </div>
            </div>

            <div
              className={`searchFormItemDropdown -tour-type ${
                activeTimeDD ? "is-active" : ""
              }`}
              data-x="time"
              data-x-toggle="is-active"
            >
              <div className="searchFormItemDropdown__container">
                <div className="searchFormItemDropdown__list sroll-bar-1">
                  {times.map((elm, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedTime((pre) => (pre == elm ? "" : elm));
                        setActiveTimeDD(false);
                      }}
                      className="searchFormItemDropdown__item"
                    >
                      <button className="js-select-control-button">
                        <span className="js-select-control-choice">{elm}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <h5 className="text-18 fw-500 mb-20 mt-20">Kategori</h5>
      {ticketTypes?.map((e, ind) => {
        console.log(ind);
        return<div className="mt-15">
        <div className="d-flex items-center justify-between">
          <div className="text-14">
            {e.ticket_type}{" "}
            <span className="fw-500">
              ${e.ticket_price}
            </span>
          </div>

          <div className="d-flex items-center js-counter">
            <button
              onClick={() => {
                minNumber(ind);
                setRefreshser((pre) => !pre);
              }}
              className="button size-30 border-1 rounded-full js-down"
            >
              <i className="icon-minus text-10"></i>
            </button>

            <div className="flex-center ml-10 mr-10">
              <div className="text-14 size-20 js-count">{numbers[ind]}</div>
            </div>

            <button
              onClick={() => {
                addNumber(ind);
                setRefreshser((pre) => !pre);
              }}
              className="button size-30 border-1 rounded-full js-up"
            >
              <i className="icon-plus text-10"></i>
            </button>
          </div>
        </div>
      </div>;
      })}

      {/* <h5 className="text-18 fw-500 mb-20 mt-20">Add Extra</h5> */}
      <div className="line mt-20 mb-20"></div>


      {/*<div className="d-flex items-center justify-between">
        <div className="d-flex items-center">
          <div className="form-checkbox">
            <input
              checked={isExtraService ? true : false}
              onChange={() => setisExtraService((pre) => !pre)}
              type="checkbox"
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon">
                <Image
                  width="10"
                  height="8"
                  src="/img/icons/check.svg"
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div className="ml-10 text-14">Saya telah membaca dan setuju dengan peraturan acara</div>
        </div>

        <div className="text-14">$40</div> 
      </div>*/}

      {/* <div className="d-flex justify-between mt-20">
        <div className="d-flex">
          <div className="form-checkbox mt-5">
            <input
              checked={isServicePerPerson ? true : false}
              onChange={() => setIsServicePerPerson((pre) => !pre)}
              type="checkbox"
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon">
                <Image
                  width="10"
                  height="8"
                  src="/img/icons/check.svg"
                  alt="icon"
                />
              </div>
            </div>
          </div>

          <div className="ml-10">
            Add Service per person
            <div className="lh-16">
              Adult: <span className="fw-500">$17.00</span> - Youth:{" "}
              <span className="fw-500">$14.00</span>
            </div>
          </div>
        </div>

        <div className="text-14">$40</div>
      </div> */}

      <div className="line mt-20 mb-20"></div>

      <div className="d-flex items-center justify-between">
        <div className="text-18 fw-500">Total:</div>
        <div className="text-18 fw-500">
          $
          {numbers && ticketTypes ? numbers.reduce((prev, cur, ind) => {
            return prev + (cur * ticketTypes[ind].ticket_price);
          }, 0).toFixed(2) : (0).toFixed(2)}
        </div>
      </div>

      <button className="button -md -dark-1 col-12 bg-accent-1 text-white mt-20">
        Pesan Sekarang
        <i className="icon-arrow-top-right ml-10"></i>
      </button>
    </div>
  );
}
