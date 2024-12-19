import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="bg-white h-[86vh] flex items-center relative">
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
  );
};

export default HeroSection;
