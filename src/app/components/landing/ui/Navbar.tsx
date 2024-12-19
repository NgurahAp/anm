import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
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
                href="/"
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
  );
};

export default Navbar;
