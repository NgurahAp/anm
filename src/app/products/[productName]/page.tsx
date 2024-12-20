"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
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

  const spesifikasi: string[] = [
    "Model : MD-300S",
    "Resolusi : 0.001g/cm",
    "Kapasitas : 0.01~300g",
    "Fitur : Padat, Cair",
    "Berat : 1.6kg",
    "Dimensi : (D) 218 x (W) 190 x (H) 170mm",
    "Asesoris : Pinset, Termometer, Berat Kalibrasi 200g, Sudut Baja, Adaptor AC, Mudah terhubung ke PC dengan perlengkapan standar RS232C, Kaca depan kedap udara."
  ]

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

  return (
    <section>
      <div className="min-h-screen px-10 pt-32 pb-10">
        <div className="flex">
          <div className="w-1/2 pl-20 pr-16">
            <Image
              src="/landing/md-300s.jpeg"
              alt="Densimeter"
              width={400}
              height={400}
              priority
            />
            <h3 className="pt-8 pb-2  font-urbanist text-xl font-extrabold">
              Spesifikasi
            </h3>
            {spesifikasi.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 pt-2 list-none">
                <span className="text-green-700">•</span>
                <li className="text-gray-500 pl-1">{feature}</li>
              </div>
            ))}
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
              sebelumnya model MD-200S. Bodi kompak dan pengukuran kepadatan
              yang akurat untuk benda padat dan sampel cair.
            </p>
            <h3 className="pt-8 pb-2 font-urbanist text-xl font-extrabold">
              Fungsi
            </h3>

            {/* Mode Padat Section */}
            <div className="mb-4">
              <div className="w-full py-2 px-4 bg-gray-100 rounded-t-lg flex justify-between">
                <span className="font-urbanist font-medium">
                  Fungsi Mode Padat
                </span>
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </div>
              <div className="pl-4 py-2 bg-gray-50 rounded-b-lg">
                <ul className="space-y-1">
                  {modePadatFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-green-700">•</span>
                      <li className="text-gray-600 text-sm pl-1">{feature}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mode Cair Section */}
            <div className="mb-4">
              <div className="w-full py-2 px-4 bg-gray-100 rounded-t-lg flex justify-between">
                <span className="font-urbanist font-medium">
                  Fungsi Mode Cair
                </span>
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </div>
              <div className="pl-4 py-2 bg-gray-50 rounded-b-lg">
                <ul className="space-y-1">
                  {modeCairFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-green-700">•</span>
                      <li className="text-gray-600 text-sm pl-1">{feature}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </section>
  );
}
