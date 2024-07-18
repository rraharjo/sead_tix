'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function HalamanPemesanan() {

  const [tahapPemesanan, setTahapPemesanan] = useState(1)
  return (
    <section className="layout-pt-md layout-pb-lg mt-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* <div className="bg-white rounded-12 shadow-2 py-15 px-20">
              <Link href="/login" className="fw-500 hover-gold2">
                Masuk
              </Link>{" "}
              untuk memesan dengan detail yang sudah disimpan atau
              <Link href="/register" className="fw-500 hover-gold2">
                {" "}
                daftar
              </Link>{" "}
              untuk mengelola pemesanan Anda!
            </div> */}

<div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20">
  {tahapPemesanan == 1 &&
  <div>
    <h2 className="text-30 md:text-24 fw-700">
      Beritahu kami siapa Anda
    </h2>

    <div className="row y-gap-30 contactForm pt-30">
      <div className="col-12">
        <div className="form-input">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">
            Nama Lengkap
          </label>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-input">
          <input type="email" required />
          <label className="lh-1 text-16 text-light-1">Email</label>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-input">
          <input type="tel" required />
          <label className="lh-1 text-16 text-light-1">
            Nomor Telepon
          </label>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-input">
          <input type="date" required />
          <label className="lh-1 text-16 text-light-1">
            Tanggal Lahir
          </label>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-input">
          <select required defaultValue="">
            <option value="" disabled>Pilih jenis kelamin Anda</option>
            <option value="male">Laki-laki</option>
            <option value="female">Perempuan</option>
          </select>
          <label className="lh-1 text-16 text-light-1" style={{ top: '-10px' }}>
            Gender
          </label>
        </div>
      </div>

      <div className="col-12">
        <div className="row y-gap-20 items-center justify-between">
          <div className="col-auto">
            <div className="text-14">
              Dengan melanjutkan pemesanan ini, saya setuju dengan Syarat Penggunaan dan Kebijakan Privasi Seadtix.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>}

{tahapPemesanan == 2 &&
              <div >
              <div className="d-flex flex-column items-center text-center">
                <div className="size-80 rounded-full flex-center bg-accent-1 text-white">
                  <i className="icon-check text-26"></i>
                </div>

                <h2 className="text-30 md:text-24 fw-700 mt-20">
                  System, pesanan Anda berhasil dikirim!
                </h2>
                <div className="mt-10">
                  Detail pemesanan telah dikirim ke: booking@tourz.com
                </div>
              </div>

              <div className="border-dashed-1 py-30 px-50 rounded-12 mt-30">
                <div className="row y-gap-15">
                  <div className="col-md-3 col-6">
                    <div>Nomor Pesanan</div>
                    <div className="text-accent-2">13119</div>
                  </div>

                  <div className="col-md-3 col-6">
                    <div>Tanggal</div>
                    <div className="text-accent-2">27/07/2021</div>
                  </div>

                  <div className="col-md-3 col-6">
                    <div>Total</div>
                    <div className="text-accent-2">$40.10</div>
                  </div>

                  <div className="col-md-3 col-6">
                    <div>Metode Pembayaran</div>
                    <div className="text-accent-2">Transfer Bank Langsung</div>
                  </div>
                </div>
              </div>

              <h2 className="text-30 md:text-24 fw-700 mt-60 md:mt-30">
                Detail Pesanan
              </h2>

              <div className="d-flex item-center justify-between y-gap-5 pt-30">
                <div className="text-18 fw-500">
                  Tur Berjalan Westminster & Masuk Westminster Abbey
                </div>
                <div className="text-18 fw-500">$382</div>
              </div>

              <div className="mt-25">
                <div className="d-flex items-center justify-between">
                  <div className="fw-500">Tanggal:</div>
                  <div className="">06 April 2023</div>
                </div>

                <div className="d-flex items-center justify-between">
                  <div className="fw-500">Waktu:</div>
                  <div className="">10:00 am</div>
                </div>

                <div className="d-flex items-center justify-between">
                  <div className="fw-500">Durasi:</div>
                  <div className="">12 Hari</div>
                </div>

                <div className="d-flex items-center justify-between">
                  <div className="fw-500">Tiket:</div>
                  <div className="">
                    Dewasa x2 = $98 - Remaja x3 = $383 - Anak-anak x6 = $394
                  </div>
                </div>
              </div>

              <div className="line mt-30 mb-30"></div>

              <div className="d-flex item-center justify-between y-gap-5">
                <div className="text-18 fw-500">Layanan per pemesanan</div>
                <div className="text-18 fw-500">$43</div>
              </div>

              <div className="line mt-30 mb-30"></div>

              <div className="d-flex item-center justify-between y-gap-5">
                <div className="text-18 fw-500">
                  Layanan per orang 1 Dewasa, 2 Remaja, 4 Anak-anak
                </div>
                <div className="text-18 fw-500">$125</div>
              </div>

              <div className="line mt-30 mb-30"></div>

              <div className="row justify-end">
                <div className="col-md-4">
                  <div className="d-flex items-center justify-between">
                    <div className="text-18 fw-500">Subtotal</div>
                    <div className="text-18 fw-500">$382</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="text-18 fw-500">Total</div>
                    <div className="text-18 fw-500">$23</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="text-18 fw-500">Jumlah Dibayar</div>
                    <div className="text-18 fw-500">$3.482</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="text-18 fw-500">Jumlah Yang Harus Dibayar</div>
                    <div className="text-18 fw-500">$43.242</div>
                  </div>
                </div>
              </div>
            </div>
}
            <div className="container d-flex items-center justify-between w-100 mt-60" style={{maxWidth:'400px'}} >
                    
                      <button onClick={()=>setTahapPemesanan(pre=>pre+1)} style={{alignSelf:'end'}}  className={`button -md -dark-1 bg-accent-1 text-white ${tahapPemesanan == 2 ? 'hiddenButtonBooking ButtonBooking' : 'ButtonBooking'} `}>
                        Bayar
                        {/* <i className="icon-arrow-top-right text-16 ml-10"></i> */}
                      </button>
                    </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="pl-50 md:pl-0">
              <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20">
                <h2 className="text-20 fw-500">Detail pemesanan Anda</h2>

                <div className="d-flex mt-30">
                     <Image
                    width={90}
                    height={84}
                    src="/img/tourSingle/booking/1.png"
                    alt="image"
                  />
                  <div className="ml-20">
                    Zipline 18 Platform dan ATV Adventure Tour Dari Phuket
                  </div>
                </div>

                <div className="line mt-20 mb-20"></div>

                <div className="">
                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Tanggal:</div>
                    <div className="">06 April 2023</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Waktu:</div>
                    <div className="">10:00 am</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Durasi:</div>
                    <div className="">12 Hari</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Tiket:</div>
                    <div className="">Dewasa x2 = $98</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500"></div>
                    <div className="">Remaja x3 = $383</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500"></div>
                    <div className="">Anak-anak x6 = $394</div>
                  </div>
                </div>

                <div className="line mt-20 mb-20"></div>

                <div className="y-gap-15">
                  <div className="d-flex justify-between">
                    <div className="fw-500">Layanan per pemesanan</div>
                    <div className="">$30.00</div>
                  </div>

                  <div className="d-flex justify-between">
                    <div className="fw-500">
                      Layanan per orang 1 Dewasa, 2 Remaja, 4 Anak-anak
                    </div>
                    <div className="">$179.00</div>
                  </div>
                </div>

                <div className="line mt-20 mb-20"></div>

                <div className="">
                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Subtotal</div>
                    <div className="">$382</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Total</div>
                    <div className="">$23</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Jumlah Dibayar</div>
                    <div className="">$3.482</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Jumlah Yang Harus Dibayar</div>
                    <div className="">$43.242</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20 mt-30">
                <h2 className="text-20 fw-500">Apakah Anda memiliki kode promo?</h2>

                <div className="contactForm mt-25">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      Kode promo
                    </label>
                  </div>
                </div>

                <button className="button -md -outline-accent-1 text-accent-1 mt-30">
                  Gunakan
                  <i className="icon-arrow-top-right text-16 ml-10"></i>
                </button>
              </div>

              <div className="mt-30">
                <button className="button -md -dark-1 bg-accent-1 text-white col-12">
                  Selesaikan Pesanan Saya
                  <i className="icon-arrow-top-right text-16 ml-10"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
