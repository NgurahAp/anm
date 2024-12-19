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
      {/* Why Us Section */}
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
      {/* Product Section */}
      <section id="products" className="min-h-screen my-10 mx-20">
        <div className="flex flex-col text-center font-urbanist">
          <p className="text-lg font-extrabold text-green-800 pt-14 pb-5">
            Produk Unggulan Kami
          </p>
          <h2 className="text-5xl font-extrabold text-gray-800 pb-14">
            Produk Terbaik untuk Kebutuhan <br /> Laboratorium dan Kesehatan
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg hover:shadow-xl border hover:border-red-500  overflow-hidden">
            <div className="flex justify-center">
              <Image
                src="/landing/md-300s.jpeg"
                alt="Gold Meter & Precious Metal Tester"
                className=" w-full object-cover"
                width={369}
                height={369}
              />
            </div>
            <div className="p-6 flex flex-col items-center">
              <h2 className="text-2xl text-center font-semibold text-gray-800">
                Alfa Mirage Densimeter MD-300S
              </h2>
              <p className="text-gray-600 text-sm text-center py-5 pb-[1.4rem]">
                Model populer dengan resolusi 0,01g/cm yang ditingkatkan dari
                sebelumnya model MD-200S.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md mt-4">
                Pesan Produk
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg hover:shadow-xl border hover:border-red-500  overflow-hidden">
            <div className="flex justify-center">
              <Image
                src="/landing/mds-300.jpeg"
                alt="Gold Meter & Precious Metal Tester"
                className="w-full object-cover"
                width={369}
                height={369}
              />
            </div>
            <div className="p-6 flex flex-col items-center">
              <h2 className="text-2xl text-center font-semibold text-gray-800">
                Elektronik Densimeter MDS-300
              </h2>
              <p className="text-gray-600 text-sm text-center py-5 pb-[1rem]">
                Fungsi baru pengukuran kepadatan bubuk ditambah dengan resolusi
                0,001g/cm dan nilai referensi 0,0001g/cm
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md">
                Pesan Produk
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg hover:shadow-xl border hover:border-red-500  overflow-hidden">
            <div className="flex justify-center">
              <Image
                src="/landing/mds-3000.jpeg"
                alt="Gold Meter & Precious Metal Tester"
                className=" w-full object-cover"
                width={369}
                height={369}
              />
            </div>
            <div className="p-6 flex flex-col items-center">
              <h2 className="text-2xl text-center font-semibold text-gray-800">
                Elektronik Densimeter MDS-3000
              </h2>
              <p className="text-gray-600 text-sm text-center py-5 pb-[1.2rem]">
                MDS-3000 dapat mengukur kapasitas maksimum hingga 3kg.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md mt-4">
                Pesan Produk
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* How to Order Section */}
      <section id="howToOrder" className="min-h-screen my-10 mx-20">
        <div className="flex flex-col text-center font-urbanist">
          <p className="text-lg font-extrabold text-green-800 pt-14 pb-5">
            Cara Pemesanan
          </p>
          <h2 className="text-5xl font-extrabold text-gray-800 pb-14">
            Langkah Mudah untuk Pemesanan
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  font-urbanist">
          <div className="bg-white rounded-lg   overflow-hidden">
            <h2 className="text-center text-2xl font-bold text-gray-700  pb-14">
              Step 1
            </h2>
            <div className="flex justify-center">
              <Image
                src="/landing/konsultasi_product.png"
                alt="Gold Meter & Precious Metal Tester"
                className=" h-48 object-cover"
                width={235}
                height={144}
              />
            </div>
            <div className="p-3 flex flex-col items-center font-poppins">
              <h2 className="text-2xl text-center font-semibold text-gray-800">
                Konsultasi Produk
              </h2>
              <p className="text-gray-600 text-sm pt-2 text-center px-10">
                Hubungi tim kami untuk konsultasi terkait kebutuhan alat
                laboratorium anda.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg   overflow-hidden">
            <h2 className="text-center text-2xl font-bold text-gray-700  pb-14">
              Step 2
            </h2>
            <div className="flex justify-center">
              <Image
                src="/landing/penawaran_harga.png"
                alt="Gold Meter & Precious Metal Tester"
                className=" h-48 object-cover"
                width={235}
                height={144}
              />
            </div>
            <div className="p-3 flex flex-col items-center font-poppins">
              <h2 className="text-2xl text-center font-semibold text-gray-800">
                Penawaran Harga
              </h2>
              <p className="text-gray-600 text-sm pt-2 text-center px-10">
                Dapatkan penawaran harga terbaik untuk produk pilihan anda.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg   overflow-hidden">
            <h2 className="text-center text-2xl font-bold text-gray-700  pb-14">
              Step 3
            </h2>
            <div className="flex justify-center">
              <Image
                src="/landing/proses_pengiriman.png"
                alt="Gold Meter & Precious Metal Tester"
                className=" h-48 object-cover"
                width={235}
                height={144}
              />
            </div>
            <div className="p-3 flex flex-col items-center font-poppins">
              <h2 className="text-2xl text-center font-semibold text-gray-800 px-10">
                Proses Pembelian & Pengiriman
              </h2>
              <p className="text-gray-600 text-sm pt-2 text-center px-10">
                Proses pembelian yang mudah dengan opsi pengiriman ke seluruh
                Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial */}
      <section className="min-h-screen flex">
        <div className="w-[47%] flex items-end justify-center">
          <Image
            src="/landing/testimonial.png"
            alt="Gold Meter & Precious Metal Tester"
            className="w-10/12 object-cover"
            width={497}
            height={605}
          />
        </div>
        <div className="w-[53%] pt-12 pr-24">
          <p className="text-green-700 font-bold pb-6 text-lg">Testimonial</p>
          <h2 className="font-extrabold text-5xl text-gray-800 pb-6 font-urbanist">
            Apa Kata Pelanggan Kami
          </h2>
          <h2 className="font-poppins text-gray-500 text-lg pb-16">
            Dengarkan langsung dari pelanggan kami tentang pengalaman mereka
            menggunakan produk dan layanan PT Anugrah Niaga Mandiri.
          </h2>
          <div className="bg-gray-100 h-72 rounded-2xl text-center p-6 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-0">
              Dr. Andi S.
            </h2>
            <p className="text-gray-400">Peneliti di Universitas terkemuka</p>
            <div className="flex items-center justify-center my-4 text-yellow-400 space-x-1">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.5 7.5h8l-6.5 4.7 2.5 7.5-6.5-4.7-6.5 4.7 2.5-7.5-6.5-4.7h8z" />
                </svg>
              </div>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.5 7.5h8l-6.5 4.7 2.5 7.5-6.5-4.7-6.5 4.7 2.5-7.5-6.5-4.7h8z" />
                </svg>
              </div>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.5 7.5h8l-6.5 4.7 2.5 7.5-6.5-4.7-6.5 4.7 2.5-7.5-6.5-4.7h8z" />
                </svg>
              </div>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.5 7.5h8l-6.5 4.7 2.5 7.5-6.5-4.7-6.5 4.7 2.5-7.5-6.5-4.7h8z" />
                </svg>
              </div>
              <div className="relative h-6 w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.5 7.5h8l-6.5 4.7 2.5 7.5-6.5-4.7-6.5 4.7 2.5-7.5-6.5-4.7h8z" />
                </svg>
                <div className="absolute top-0 left-0 overflow-hidden w-[50%] h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 fill-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.5 7.5h8l-6.5 4.7 2.5 7.5-6.5-4.7-6.5 4.7 2.5-7.5-6.5-4.7h8z" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-gray-600 font-medium italic px-16">
              Kami telah bekerja sama dengan PT.Anugrah Niaga Mandiri selama
              beberapa tahun dan selalu puas dengan kualitas alat dan layanan
              mereka.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Us */}
      <section id="contactUs" className="h-[80vh] bg-gray-100  py-6 px-36">
        <div className="flex w-full h-full gap-x-8">
          <div className="w-1/3 bg-white p-5 rounded-lg">
            <h2 className="font-urbanist text-green-700 font-bold text-lg">
              Hubungi Kami
            </h2>
            <h2 className="font-urbanist text-gray-800 py-4 font-extrabold text-3xl">
              Butuh Konsultasi atau Ingin Memesan?
            </h2>
            <p className="text-lg text-gray-500 pb-3">
              Hubungi kami untuk konsultasi, pemesanan, atau pertanyaan lainnya.
              Kami berkomitmen memberikan solusi terbaik untuk kebutuhan
              laboratorium dan kesehatan Anda.
            </p>
            <button className="flex items-center w-80 justify-center border border-red-500 rounded-md py-3 mx-3 my-6 text-red-600 space-x-4 hover:text-white transition duration-300 hover:bg-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-medium">0816-1740-8900</span>
            </button>

            <button className="flex items-center w-80 justify-center border border-red-500 rounded-md py-3 mx-3 my-6 text-red-600 space-x-4 hover:text-white transition duration-300 hover:bg-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">sales@anm.co.id</span>
            </button>
          </div>
          <div className="w-2/3 bg-white rounded-lg p-10">
            <h2 className="font-urbanist text-gray-800 font-extrabold text-5xl">
              Dapatkan Penawaran Spesial Sekarang!
            </h2>
            <form className="space-y-4 pt-7">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="h-[60vh] bg-[#333333] py-16 px-20">
        <div className="flex">
          <div>
            <Image
              src="/landing/footer_logo.jpg"
              alt="Gold Meter & Precious Metal Tester"
              className="w-32"
              width={96}
              height={36}
            />
            <div className="flex py-7">
              <div className="bg-red-500 p-4 rounded-full">
                <Image
                  src="/landing/whatsapp.png"
                  alt="Gold Meter & Precious Metal Tester"
                  className="w-5"
                  width={16}
                  height={16}
                />
              </div>
              <div className="pl-4">
                <h1 className="font-urbanist font-bold text-lg text-white">
                  WhatsApp
                </h1>
                <p className="text-slate-300 font-medium">
                  0816-1740-8900 / 0813-9838-7525
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-red-500 p-4 rounded-full">
                <Image
                  src="/landing/phone.png"
                  alt="Gold Meter & Precious Metal Tester"
                  className="w-5"
                  width={16}
                  height={16}
                />
              </div>
              <div className="pl-4">
                <h1 className="font-urbanist font-bold text-lg text-white">
                  Phone
                </h1>
                <p className="text-slate-300 font-medium">
                  (021) 8690-6782 / (021) 8690-6783
                </p>
              </div>
            </div>
          </div>
          <div className="pl-32">
            <h1 className="font-urbanist font-medium text-xl text-white">
              Alamat Kantor
            </h1>
            <p className="text-slate-300 font-light py-4">
              Jl. Radin Inten II No. 61A Duren Sawit
            </p>
            <h1 className="font-urbanist font-medium text-xl text-white">
              Email
            </h1>
            <p className="text-slate-300 font-light py-4">
              sales@anm.co.id <br />
              anugrah.niaga.mandiri@gmail.com
            </p>
            <h1 className="font-urbanist font-medium text-xl text-white">
              Website
            </h1>
            <p className="text-slate-300 font-light pt-4">
              http://www.anm.co.id
            </p>
          </div>
          <div className="pl-24">
            <h1 className="font-urbanist font-medium text-2xl text-white">
              Media Sosial
            </h1>
            <div className="flex space-x-4 mt-4">
              <div className="group relative cursor-pointer">
                <div className="relative rounded-lg p-2 border border-slate-300 group-hover:border-green-700 transition-all duration-300 transform group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    className="stroke-slate-300 group-hover:stroke-green-700 fill-slate-300 group-hover:fill-green-700 transition-colors duration-300"
                  >
                    <path d="M13.396 22v-8.778h2.948l.441-3.406h-3.389V7.598c0-.986.273-1.659 1.676-1.659h1.793V3.005c-.311-.042-1.376-.135-2.617-.135-2.587 0-4.361 1.579-4.361 4.473v2.493H6.346v3.406h2.948V22h4.102z" />
                  </svg>
                </div>
              </div>
              <div className="group relative cursor-pointer">
                <div className="relative rounded-lg p-2 border border-slate-300 group-hover:border-green-700 transition-all duration-300 transform group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-slate-300 group-hover:stroke-green-700 transition-colors duration-300"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </div>
              </div>
              <div className="group relative cursor-pointer">
                <div className="relative rounded-lg p-2 border border-slate-300 group-hover:border-green-700 transition-all duration-300 transform group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    className="fill-slate-300 group-hover:fill-green-700 transition-colors duration-300"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.767 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.343c-.09.375-.293 1.199-.332 1.363-.053.218-.174.265-.402.159-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.608 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.756 10.748 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </div>
              </div>
              <div className="group relative cursor-pointer">
                <div className="relative rounded-lg p-2 border border-slate-300 group-hover:border-green-700 transition-all duration-300 transform group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    className="fill-slate-300 group-hover:fill-green-700 transition-colors duration-300"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] mt-5 bg-slate-300 hover:bg-green-500 transition-all duration-300"></div>
        <div className=" text-slate-400 text-center p-5">
          <p className="text-sm">
            &copy; Copyright 2024
            <a
              href="https://anm.co.id"
              className="text-blue-500 hover:underline"
            >
              anm.co.id
            </a>
            . All Rights Reserved Powered by
            <a
              href="https://resolusiweb.com"
              className="font-bold text-blue-600 hover:underline"
            >
              Resolusiweb.com
            </a>
            .
          </p>
        </div>
      </footer>
    </article>
  );
}
