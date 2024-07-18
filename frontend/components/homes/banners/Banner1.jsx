import Image from "next/image";
import React from "react";

export default function Banner1() {
  return (
    <section className="cta -type-4 layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="cta__content">
          <div className="row justify-between">
            <div className="col-xl-7 col-lg-8">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-24 lh-13 text-gold-1"
              >
                Promotor, jual tiket acaramu disini!
              </h2>

              <p data-aos="fade-up" data-aos-delay="" className="mt-10 text-light-1">
                Diskusikan penjualan tiket acaramu dengan pihak yang profesional.
              </p>

              <button
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md -dark-1 bg-accent-1 text-white mt-10"
              >
                Hubungi Kami
                <i className="icon-online-support-2 ml-10"></i>
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="cta__image">
              <Image
                src="/img/cta/11/1.jpg"
                width={730}
                height={375}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
