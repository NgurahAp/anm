interface ProductDetailProps {
  params: {
    productName: string; // Tipe eksplisit untuk parameter productName
  };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const { productName } = params;

  // Dekode nama produk dari URL (untuk menangani karakter URL yang di-encode seperti '%20')
  const decodedProductName = decodeURIComponent(productName);

  // Contoh daftar produk valid untuk validasi (opsional)
  const validProducts = [
    "Alfa Mirage Densimeter MD-300S",
    "Elektronik Densimeter MDS-300",
    "Elektronik Densimeter MDS-3000",
  ];

  // Jika produk tidak valid, tampilkan fallback
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

  // Halaman detail untuk produk valid
  return (
    <div className="min-h-screen px-10 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Detail Produk: {decodedProductName}
      </h1>
      <p className="text-gray-600 text-lg">
        Informasi lengkap tentang produk <strong>{decodedProductName}</strong>{" "}
        akan ditampilkan di sini.
      </p>
      {/* Tambahkan informasi detail produk lainnya */}
    </div>
  );
}
