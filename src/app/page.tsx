import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <article className="font-poppins pt-24">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0">
              <Image
                src="/landing/navbar_logo.jpg"
                alt="Logo PT Anugrah Niaga Mandiri"
                width={136}
                height={48}
              />
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-6">
                <Link
                  href="#home"
                  className="text-gray-900 hover:text-red-500 px-3 py-1 text-base font-medium border-b border-transparent hover:border-red-500 transition-all duration-300"
                >
                  Home
                </Link>
                <Link
                  href="#whyUs"
                  className="text-gray-900 hover:text-red-500 px-3 py-1 text-base font-medium border-b border-transparent hover:border-red-500 transition-all duration-300"
                >
                  Why Us?
                </Link>
                <Link
                  href="#products"
                  className="text-gray-900 hover:text-red-500 px-3 py-1 text-base font-medium border-b border-transparent hover:border-red-500 transition-all duration-300"
                >
                  Best Product
                </Link>
                <Link
                  href="#howToOrder"
                  className="text-gray-900 hover:text-red-500 px-3 py-1 text-base font-medium border-b border-transparent hover:border-red-500 transition-all duration-300"
                >
                  How to Order
                </Link>
                <Link
                  href="#contactUs"
                  className="text-gray-900 hover:text-red-500 px-3 py-1 text-base font-medium border-b border-transparent hover:border-red-500 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <Link
                href="#"
                className="text-red-500 border-2 border-red-500 px-6 py-3 rounded-md text-base font-semibold"
              >
                Minta Penawaran
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="bg-white h-[86vh] flex items-center relative"
      >
        <div className="w-2/3 pl-20 font-urbanist">
          <h2 className="text-3xl font-semibold text-gray-800">
            PT. Anugrah Niaga Mandiri
          </h2>
          <h1 className="py-6 text-5xl font-extrabold text-gray-900">
            Solusi Lengkap untuk Kebutuhan <br />
            <span className="text-7xl font-extrabold text-green-700">
              Peralatan Laboratorium
            </span>
          </h1>
          <p className="font-poppins text-xl text-gray-700 italic pb-10">
            Distributor dan Agen Terpercaya Alat Laboratorium Berkualitas Tinggi
            di Indonesia
          </p>
          <Link
            href="#"
            className="bg-red-500 text-white border-2 border-red-500 px-6 py-3 rounded-md text-base font-semibold"
          >
            Konsultasi Sekarang
          </Link>
        </div>
        <div className="w-1/3">
          <Image
            src="/landing/densimeter.jpg"
            alt="Densimeter"
            width={288}
            height={323}
          />
        </div>
        <Image
          src="/landing/navbar_logo.jpg"
          width={120}
          height={23}
          alt="Logo PT Anugrah Niaga Mandiri"
          className="absolute bottom-12 right-10"
        ></Image>
      </section>
      {/* About Us Section */}
      <section className="min-h-screen flex items-center">
        <div className="flex gap-x-10 px-24 ">
          <div className="w-1/2">
            <Image
              className="w-full"
              src="/landing/about_us.jpg"
              alt="Penyedia Utama Solusi Alat Laboratorium dan Alat Kesehatan"
              height={547}
              width={523}
            />
          </div>
          <div className="w-1/2 font-urbanist">
            <p className="text-green-700 font-extrabold pb-6 text-lg">
              Tentang Kami
            </p>
            <h2 className="font-extrabold text-5xl text-gray-800 pb-6">
              Penyedia Utama Solusi Alat Laboratorium dan Alat Kesehatan
            </h2>
            <h2 className="font-poppins text-gray-500 text-xl ">
              PT. Anugrah Niaga Mandiri adalah perusahaan yang bergerak di
              bidang jual beli, distribusi, dan keagenan alat-alat laboratorium.
              Kami berkomitmen menyediakan produk-produk berkualitas tinggi yang
              mendukung penelitian, pengujian, dan pengembangan di berbagai
              bidang, mulai dari pendidikan hingga industri.
            </h2>
            <div className="flex items-center justify-center pt-14">
              <div className="flex items-center text-center">
                <div className="px-16">
                  <p className="text-5xl text-gray-800">20+</p>
                  <p className="text-red-500 text-lg font-semibold mt-2">
                    Tahun Pengalaman
                  </p>
                </div>
                <div className="h-16 border-l-2 border-gray-300"></div>
                <div className="px-16">
                  <p className="text-5xl text-gray-800">67+</p>
                  <p className="text-red-500 text-lg font-semibold mt-2">
                    Produk Terbaik
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Us */}
      <section id="whyUs" className="min-h-screen flex items-center my-10">
        <div className="flex gap-x-10 px-24 ">
          <div className="w-1/2 font-urbanist">
            <p className="text-green-700 font-extrabold pb-6 text-lg">
              Mengapa Memilih Kami
            </p>
            <h2 className="font-extrabold text-4xl text-gray-900 pb-8">
              Penyedia Alat Laboratorium dan Kesehatan Terbaik
            </h2>
            <div className="flex space-x-4">
              <div className="flex flex-col items-center pt-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <div className="w-0.5 h-20 bg-red-500 "></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <div className="w-0.5 h-20 bg-red-500 "></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <div className="w-0.5 h-20 bg-red-500 "></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div className="px-4 rounded-md w-full">
                <div>
                  <h4 className="text-2xl text-gray-800 font-bold">
                    Produk Berkualitas Tinggi
                  </h4>
                  <p className="mt-1 text-lg text-gray-500 font-medium">
                    Kami menyediakan berbagai alat laboratorium dengan
                    merek-merek ternama seperti Memmert, Binder, dan Alfa Mirage
                  </p>
                </div>
                <div className="pt-6">
                  <h4 className="text-2xl text-gray-800 font-bold">
                    Harga Kompetitif
                  </h4>
                  <p className="mt-1 text-lg text-gray-500 font-medium">
                    Menawarkan solusi alat laboratorium dengan harga yang
                    terjangkau dan nilai terbaik.
                  </p>
                </div>
                <div className="pt-6">
                  <h4 className="text-2xl text-gray-800 font-bold">
                    Layanan Purna Jual Terpercaya
                  </h4>
                  <p className="mt-1 text-lg text-gray-500 font-medium">
                    Didukung dengan garansi dan layanan purna jual yang
                    memuaskan.
                  </p>
                </div>
                <div className="pt-6">
                  <h4 className="text-2xl text-gray-800 font-bold">
                    Pengiriman Cepat dan Aman
                  </h4>
                  <p className="mt-1 text-lg text-gray-500 font-medium">
                    Produk dikirim dengan standar pengemasan terbaik agar tiba
                    dengan aman dan cepat di lokasi Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              width={547}
              height={589}
              className="w-full"
              src="/landing/why_us.jpg"
              alt="Logo"
            />
          </div>
        </div>
      </section>
    </article>
  );
}
