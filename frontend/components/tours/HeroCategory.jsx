"use client";
import datasource from "@/source/url"
import axios from "axios";
import Image from "next/image";

import React, { useState, useEffect, useRef } from "react";



export default function Hero({eventType}) {
  

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

      
    </>
  );
}
