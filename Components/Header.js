import Image from "next/image";
import Images from "../assets/logo.png";
function Header() {
  return (
    <div className="shadow-sm border-b border-accent-1 bg-blue sticky  top-0 z-50">
      <div className="flex justify-between mb-10 max-w-6xl mx-5 space-x-36 ">
        <div className=" relative p-12 mt-12  cursor-pointer my-auto ">
          <Image
            src={Images}
            layout="fill"
            objectFit="contain"
            priority
            objectPosition="left"
          />
        </div>
        <div className=" hidden lg:flex md:flex lg:space-x-80 ">
          <div
            class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-8 p-10"
            id="navbar-collapse"
          >
            <a
              href="#"
              class="p-2 lg:px-4 md:mx-2  w-max text-white rounded hover:text-gray-500"
            >
              HOME
            </a>
            <a
              href="#"
              class="p-2 lg:px-4 md:mx-2 w-max  text-white rounded hover:bg-white-200 hover:text-gray-500"
            >
              NEW ARRIVALS
            </a>
            <a
              href="#"
              class="p-2 lg:px-4 md:mx-2 w-max text-white rounded hover:bg-white-200 hover:text-gray-500 transition-colors duration-300"
            >
              DESIGNER
            </a>
            <a
              href="#"
              class="p-2 lg:px-4 md:mx-2 w-max text-white rounded  hover:text-gray-500 transition-colors duration-300"
            >
              OCCASION
            </a>
            <a
              href="#"
              class="p-2 lg:px-4 md:mx-2 w-max text-white rounded hover:text-gray-500 transition-colors duration-300"
            >
              STYLE
            </a>
            <a
              href="#"
              class="p-2 lg:px-4 md:mx-2 w-max text-white text-center border border-transparent rounded hover:text-gray-500 transition-colors duration-300"
            >
              SALE
            </a>
            <a
              href="#"
              class="p-2 lg:px-4 md:mx-2 w-max  text-white hover:text-gray-500 transition-colors duration-300 mt-1 md:mt-0 "
            >
              ADVANCED SEARCH
            </a>{" "}
            <a
              href="#"
              class="p-2 lg:px-4 md:mx-2 w-max text-white  text-center border border-transparent rounded hover:text-gray-500 transition-colors duration-300"
            >
              NEW DESIGNER
            </a>
          </div>

          <div
            class="hidden md:flex flex-col md:flex-row md:ml-auto md:mt-8  p-10 "
            id="navbar-collapse"
          >
            <a
              href="#"
              class="p-2 lg:px-4 md:mx-2 text-white rounded hover:text-gray-500"
            >
              ACCOUNT
            </a>
            <a
              href="#"
              class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-white-200 hover:text-gray-500 transition-colors duration-300"
            >
              SEARCH
            </a>
            <a
              href="#"
              class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-white-200 hover:text-gray-500 transition-colors duration-300"
            >
              CART(0)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
