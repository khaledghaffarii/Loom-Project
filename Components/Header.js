import Image from "next/image";
import Images from "../assets/logo.png";
function Header() {
  return (
    <div className="shadow-sm border-b border-accent-1 bg-blue sticky  top-0 z-50">
      <div className="flex justify-between mb-10 max-w-6xl mx-5 space-x-96 ">
        <div className=" relative p-12 mt-12 w-40 cursor-pointer my-auto ">
          <Image
            src={Images}
            layout="fill"
            objectFit="contain"
            priority
            objectPosition="left"
          />
        </div>

        <div
          class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-8 p-10"
          id="navbar-collapse"
        >
          <a
            href="#"
            class="p-2 lg:px-4 md:mx-2 text-white rounded hover:text-gray-500"
          >
            Home
          </a>
          <a
            href="#"
            class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-white-200 hover:text-gray-500 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-white-200 hover:text-gray-500 transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#"
            class="p-2 lg:px-4 md:mx-2 text-white rounded  hover:text-gray-500 transition-colors duration-300"
          >
            Pricing
          </a>
          <a
            href="#"
            class="p-2 lg:px-4 md:mx-2 text-white rounded hover:text-gray-500 transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            class="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:text-gray-500 transition-colors duration-300"
          >
            Login
          </a>
          <a
            href="#"
            class="p-2 lg:px-4 md:mx-2 text-white hover:text-gray-500 transition-colors duration-300 mt-1 md:mt-0 "
          >
            Signup
          </a>{" "}
          <a
            href="#"
            class="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:text-gray-500 transition-colors duration-300"
          >
            Login
          </a>
        </div>

        <div
          class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-8 p-10 "
          id="navbar-collapse"
        >
          <a
            href="#"
            class="p-2 lg:px-4 md:mx-2 text-white rounded hover:text-gray-500"
          >
            Home
          </a>
          <a
            href="#"
            class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-white-200 hover:text-gray-500 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-white-200 hover:text-gray-500 transition-colors duration-300"
          >
            Features
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
