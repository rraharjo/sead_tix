import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "404 Not found | Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
  description: "Seadtix - Beli Tiketmu Untuk Semua Jenis Acara",
};

export default function NotFound() {
  return (
    <main>
      {/* <Header1 /> */}
      <section className="nopage mt-header">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-xl-6 col-lg-6">
              <Image
                width="629"
                height="481"
                src="/img/general/logo-1-dark.svg"
                alt="image"
              />
            </div>

            <div className="col-xl-5 col-lg-6">
              <div className="nopage_content pr-30 lg:pr-0">
                <h1 className="text-150">
                  40<span className="text-accent-1 text-150">4</span>
                </h1>
                <h2 className="text-30 md:text-24 fw-700">
                  Oops! Sepertinya Anda tersesat.
                </h2>
                <p>
                  Halaman yang Anda cari tidak tersedia. Coba cari lagi atau
                  gunakan tombol untuk kembali.
                </p>
                <Link href="/">
                  <button className="button -md -dark-1 bg-accent-1 text-white mt-25">
                    Kembali ke halaman utama
                    {/* <i className="icon-arrow-top-right ml-10"></i> */}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FooterOne /> */}
    </main>
  );
}
