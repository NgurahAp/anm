"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { use } from "react";

interface Params {
  productName: string;
}

interface PageProps {
  params: Promise<Params>;
}

export default function ProductDetail({ params }: PageProps) {
  const resolvedParams = use(params as Promise<{ productName: string }>);
  const { productName } = resolvedParams;

  const [isModePadatOpen, setIsModePadatOpen] = useState<boolean>(false);
  const [isModeCairOpen, setIsModeCairOpen] = useState<boolean>(false);

  const decodedProductName = decodeURIComponent(productName);

  const validProducts: string[] = [
    "Alfa Mirage Densimeter MD-300S",
    "Elektronik Densimeter MDS-300",
    "Elektronik Densimeter MDS-3000",
  ];

  const modePadatFeatures: string[] = [
    "Kepadatan minimum dan resolusi volume 0,001 g / cm.",
    "Rentang pengukuran maksimuum hingga 300g.",
    "Pengoperasian yang lebih mulus dan mudah dengan Container yang didesain ulang dan Tangki Air Styrol tahan bahan kimia.",
    "Hanya 10 klik untuk mengukur.",
    "Mengukur tingkat perubahan kepadatan dan volume dimungkinkan.",
    "Penilaian hasil dengan Mode Pembandingan tersedia.",
    "Mode Pengaturan Opsional tersedia untuk perbedaan yang tidak pasti sampel atau pengembangan material baru.",
    "Koneksi mudah ke PC dengan melengkapi RS232C antarmuka standar.",
  ];

  const modeCairFeatures: string[] = [
    "MD-300S dapat mengukur densitas cairan terkompensasi dengan pengaturan suhu cairan terkompensasi dan laju suhu kompensasi.",
  ];

  if (!validProducts.includes(decodedProductName)) {
    return (
      <div className="min-h-screen px-10 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Produk Tidak Ditemukan
        </h1>
        <p className="text-gray-600 text-lg">
          Produk <strong>{decodedProductName}</strong> tidak tersedia.
        </p>
      </div>
    );
  }

  const handleModePadatToggle = () => {
    setIsModePadatOpen((prev) => !prev);
  };

  const handleModeCairToggle = () => {
    setIsModeCairOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen px-10 pt-32">
      <div className="flex">
        <div className="w-1/2 pl-20">
          <Image
            src="/landing/md-300s.jpeg"
            alt="Densimeter"
            width={400}
            height={400}
            priority
          />
        </div>
        <div className="w-1/2 pt-10 px-5">
          <h2 className="font-urbanist font-extrabold text-5xl pr-10 text-gray-800">
            Alfa Mirage Densimeter MD-300S
          </h2>
          <h3 className="pt-8 pb-2 font-urbanist text-xl font-extrabold">
            Deskripsi
          </h3>
          <p className="text-gray-500">
            Model populer dengan resolusi 0,001 g / cm yang ditingkatkan dari
            sebelumnya model MD-200S. Bodi kompak dan pengukuran kepadatan yang
            akurat untuk benda padat dan sampel cair.
          </p>
          <h3 className="pt-8 pb-2 font-urbanist text-xl font-extrabold">
            Fungsi
          </h3>

          {/* Mode Padat Dropdown */}
          <div className="mb-4">
            <button
              onClick={handleModePadatToggle}
              type="button"
              className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 hover:bg-gray-100 rounded-t-lg transition-all duration-300"
            >
              <span className="font-urbanist font-medium">
                Fungsi Mode Padat
              </span>
              {isModePadatOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {isModePadatOpen && (
              <div className=" pl-4 py-2 bg-gray-50 rounded-b-lg">
                <ul className="space-y-1">
                  {modePadatFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {/* Bullet point */}
                      <span className="text-green-700">•</span>
                      {/* Text */}
                      <li className="text-gray-600 text-sm  pl-1">{feature}</li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Mode Cair Dropdown */}
          <div className="mb-4">
            <button
              onClick={handleModeCairToggle}
              type="button"
              className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 hover:bg-gray-100 rounded-t-lg transition-all duration-300"
            >
              <span className="font-urbanist font-medium">
                Fungsi Mode Cair
              </span>
              {isModeCairOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {isModeCairOpen && (
              <div className=" pl-4 py-2 bg-gray-50 rounded-b-lg">
                <ul className="space-y-1  ">
                  {modeCairFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {/* Bullet point */}
                      <span className="text-green-700">•</span>
                      {/* Text */}
                      <li className="text-gray-600 text-sm  pl-1">{feature}</li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
