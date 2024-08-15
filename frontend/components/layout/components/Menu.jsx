"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import datasource from "@/source/url"
import axios from "axios";
import { FaChevronDown } from 'react-icons/fa';

export default function Menu() {
  const pathname = usePathname();
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  const [musicCategories, setMusicCategories] = useState([]);
  const [sportsCategories, setSportsCategories] = useState([]);
  const [showsCategories, setShowsCategories] = useState([]);
  useEffect(() => {
    const getShowsCategories = async () => {
      const response = await axios.get(apiAddress + "/events/classifications/show");
      const data = response.data.return_value;
      setShowsCategories(data);
    };
    getShowsCategories();
  }, []);

  useEffect(() => {
    const getMusicCategories = async () => {
      const response = await axios.get(apiAddress + "/events/classifications/music");
      const data = response.data.return_value;
      setMusicCategories(data);
      console.log(data);
    };
    getMusicCategories();

  }, []);

  useEffect(() => {
    const getSportsCategories = async () => {
      const response = await axios.get(apiAddress + "/events/classifications/sports");
      const data = response.data.return_value;
      setSportsCategories(data);
    };
    getSportsCategories();
  }, []);
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
            <b
              className={
                pathname?.split("/")[1].split("-")[0] == "home"
                  ? "activeMenu"
                  : ""
              }
              href="#"
            >
              Olahraga <i className="ml-10"><FaChevronDown size="10"/> </i>
            </b>

            <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                {sportsCategories.map((elm) => (
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
            <b
              className={
                pathname?.split("/")[1].split("-")[0] == "home"
                  ? "activeMenu"
                  : ""
              }
              href="#"
            >
              Show <i className="ml-10"><FaChevronDown size="10"/> </i>
            </b>

            <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                {showsCategories.map((elm) => (
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
        </div>
      </div>
    </>
  );
}
