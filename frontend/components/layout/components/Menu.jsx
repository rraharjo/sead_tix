"use client";

import { homes, pages, tours } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import datasource from "@/source/url"
import axios from "axios";
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

export default function Menu() {
  const pathname = usePathname();
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  const [musicCategories, setMusicCategories] = useState([]);
  useEffect(() => {
    const getMusicCategories = async () => {
      console.log(apiAddress + "/classifications/concert");
      const response = await axios.get(apiAddress + "/events/classifications/concert");
      const data = response.data.return_value;
      setMusicCategories(data);
    };
    getMusicCategories();
  });
  return (
    <>
      <div className="xl:d-none ml-30">
        <div className="desktopNav">
          <div className="desktopNav__item">
            <b
              className={
                pathname?.split("/")[1].split("-")[0] == "home"
                  ? "activeMenu"
                  : ""
              }
              href="#"
            >
              Musik <i className="ml-10"><FaChevronDown size="10"/> </i>
            </b>

            <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                {musicCategories.map((elm) => (
                  <div className="desktopNavSubnav__item text-dark-1">
                    <Link
                      className={""}
                      href=""
                    >
                      {elm}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="desktopNav__item">
            <b href="#">
              Olahraga <i className="ml-10"><FaChevronDown size="10"/> </i>
            </b>

            <div className="desktopNavMega">
              <div className="desktopNavMega__container">
                <div className="desktopNavMega__lists">
                  {tours.map((elm, i) => (
                    <div key={i} className="desktopNavMega-list">
                      <div className="desktopNavMega-list__item">
                        <div className="desktopNavMega-list__title">
                          {elm.title}
                        </div>

                        <div className="desktopNavMega-list__list">
                          {elm.links.map((elm2, i2) => (
                            <div key={i2} className="desktopNavMega-list__link">
                              <Link href={elm2.href}>{elm2.title}</Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="desktopNavMega__info">
                  <div className="specialCardGrid row y-gap-30">
                    <div className="col-12">
                      <div className="specialCard">
                        <div className="specialCard__image">
                          <Image
                            width={615}
                            height={300}
                            src="/img/cta/10/1.jpg"
                            alt="image"
                          />
                        </div>

                        <div className="specialCard__content">
                          <div className="specialCard__subtitle">
                            Enjoy Upto
                          </div>
                          <h3 className="specialCard__title">60 % OFF</h3>
                          <div className="specialCard__text">
                            on Your Booking
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="specialCard">
                        <div className="specialCard__image">
                          <Image
                            width={615}
                            height={300}
                            src="/img/cta/10/2.jpg"
                            alt="image"
                          />
                        </div>

                        <div className="specialCard__content">
                          <div className="specialCard__subtitle">
                            80% Discount
                          </div>
                          <h3 className="specialCard__title">
                            Are You Ready
                            <br /> To Turkey Tour
                          </h3>
                          <div className="specialCard__text"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="desktopNav__item">
            <b href="#">
              Pertunjukan <i className="ml-10"><FaChevronDown size="10"/> </i>
            </b>

            <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                {pages.map((elm, i) => (
                  <div key={i} className="desktopNavSubnav__item text-dark-1">
                    {elm.href ? (
                      <Link href={elm.href}>{elm.title}</Link>
                    ) : (
                      <a href="#">
                        {elm.title} <i className="ml-10"><FaChevronRight size="10"/> </i>
                      </a>
                    )}

                    {elm.subnav && (
                      <div className="desktopNavSubnav">
                        <div className="desktopNavSubnav__content">
                          {elm.subnav.map((elm2, i2) => (
                            <div key={i2} className="desktopNavSubnav__item">
                              <Link href={elm2.href}>{elm2.title}</Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
