"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    namaLengkap: '',
    nomorHandphone: '',
    email: '',
    konfirmasiEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="layout-pt-lg layout-pb-lg bg-accent-1-dark h-full">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-6 col-lg-7 col-md-9 text-light-1">
            <div className="text-center mb-60 md:mb-30">
              <h1 className="text-30 text-light-1">Daftar</h1>
              <div className="text-18 fw-500 mt-20 md:mt-15">
                Ayo daftarkan akunmu!
              </div>
              <div className="mt-5">
                Sudah punya akun?{" "}
                <Link href="/login" className="fw-500 hover-gold3">
                  Masuk disini!
                </Link>
              </div>
            </div>

            <form
            onSubmit={(e) => e.preventDefault()}
            className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30 bg-white"
            >
              <div className="form-input">
                <input
                  type="text"
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  placeholder=""
                />
                <label className={`lh-1 text-16 text-light-1 ${formData.username ? 'shrink' : ''}`}>
                  Username
                </label>
              </div>

              <div className="form-input mt-30">
                <input
                  type="text"
                  name="namaLengkap"
                  required
                  value={formData.namaLengkap}
                  onChange={handleChange}
                  placeholder=""
                />
                <label className={`lh-1 text-16 text-light-1 ${formData.namaLengkap ? 'shrink' : ''}`}>
                  Nama Lengkap
                </label>
              </div>

              <div className="form-input mt-30">
                <input
                  type="tel"
                  name="nomorHandphone"
                  required
                  pattern="[0-9]{10,15}"
                  value={formData.nomorHandphone}
                  onChange={handleChange}
                  placeholder=""
                />
                <label className={`lh-1 text-16 text-light-1 ${formData.nomorHandphone ? 'shrink' : ''}`}>
                  Nomor Handphone
                </label>
              </div>

              <div className="form-input mt-30">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=""
                />
                <label className={`lh-1 text-16 text-light-1 ${formData.email ? 'shrink' : ''}`}>
                  Alamat Email
                </label>
              </div>

              <div className="form-input mt-30">
                <input
                  type="email"
                  name="konfirmasiEmail"
                  required
                  value={formData.konfirmasiEmail}
                  onChange={handleChange}
                  placeholder=""
                />
                <label className={`lh-1 text-16 text-light-1 ${formData.konfirmasiEmail ? 'shrink' : ''}`}>
                  Konfirmasi Alamat Email
                </label>
              </div>

              <button className="button -md -dark-1 bg-accent-1 text-white col-12 mt-30">
                Daftar
                <i className="ml-10">
                  <FaUserPlus size="15"/> 
                </i>
              </button>

              <div className="relative line mt-50 mb-30">
                <div className="line__word fw-500 text-accent-1-dark"> Atau </div>
              </div>

              <div className="row y-gap-15">
                <div className="col">
                  <button className="button -outline-red-1 google-button col-12">
                    <i className="icon">
                      <FaGoogle size="20"/> 
                    </i>
                    Masuk dengan Google
                  </button>
                </div>
              </div>
          </form>

          </div>
        </div>
      </div>
    </section>
  );
}
