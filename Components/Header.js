// import Image from "next/image";
// import Images from "../assets/logo.png";
// function Header() {
//   return (
//     <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
//       <div className="object-contain">
//         <Image src={Images} width={80} height={130} />
//       </div>

//       <div className=" hidden lg:flex flex-grow justify-evenly max-w-9xl ">

//           <a
//             href="#"
//             class="p-2 lg:px-4 md:mx-2  w-max text-white rounded hover:text-gray-500"
//           >
//             HOME
//           </a>
//           <a
//             href="#"
//             class="p-2 lg:px-4 md:mx-2 w-max  text-white rounded hover:bg-white-200 hover:text-gray-500"
//           >
//             NEW ARRIVALS
//           </a>
//           <a
//             href="#"
//             class="p-2 lg:px-4 md:mx-2 w-max text-white rounded hover:bg-white-200 hover:text-gray-500 "
//           >
//             DESIGNER
//           </a>
//           <a
//             href="#"
//             class="p-2 lg:px-4 md:mx-2 w-max text-white rounded  hover:text-gray-500 "
//           >
//             OCCASION
//           </a>
//           <a
//             href="#"
//             class="p-2 lg:px-4 md:mx-2 w-max text-white rounded hover:text-gray-500 "
//           >
//             STYLE
//           </a>
//           <a
//             href="#"
//             class="p-2 lg:px-4 md:mx-2 w-max text-white text-center border border-transparent  hover:text-gray-500 "
//           >
//             SALE
//           </a>
//           <a
//             href="#"
//             class="p-2 lg:px-4 md:mx-2 w-max  text-white hover:text-gray-500  mt-1 md:mt-0 "
//           >
//             ADVANCED SEARCH
//           </a>{" "}
//           <a
//             href="#"
//             class="p-2 lg:px-4 md:mx-2 w-max text-white  text-center border border-transparent rounded hover:text-gray-500 "
//           >
//             NEW DESIGNER
//           </a>
//         </div>

//         <div

//           id="navbar-collapse"
//         >
//           <a
//             href="#"
//             class="p-2 lg:px-4 md:mx-2 text-white rounded hover:text-gray-500"
//           >
//             ACCOUNT
//           </a>
//           <a
//             href="#"
//             class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-white-200 hover:text-gray-500 transition-colors duration-300"
//           >
//             SEARCH
//           </a>
//           <a
//             href="#"
//             class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-white-200 hover:text-gray-500 transition-colors duration-300"
//           >
//             CART(0)
//           </a>
//         </div>

//     </header>
//   );
// }

// export default Header;
import React from "react";
import Image from "next/image";
import Images from "../assets/logo.png";
export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header class="fixed top-0 w-full clearNav z-50">
      <div class="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <a
            href="/"
            class="flex   text-gray-200 mb-4 md:mb-0"
          >
            <Image src={Images} width={80} height={110} />
          </a>
         
        </div>
        <div
          className={
            "md:flex flex-grow items-center " +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div class="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start ">
            <a class="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04 font-serif ">
              NEW ARRIVALS
            </a>
            <div className="relative">
              <button
                type="button"
                class="
                   group  font-serif rounded-md font-semibold text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                  "
                onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
              >
                <span className="tr04"> DESIGNER</span>
                <svg
                  className={
                    flyer === true
                      ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200"
                      : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer
                    ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 g327 border transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-black px-2 py-6 sm:gap-8 ">
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          NINE4 TEMPLATE #1
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          First Template
                        </p>
                      </div>
                    </a>
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          NINE4 TEMPLATE #2
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Second Template
                        </p>
                      </div>
                    </a>
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          NINE4 TEMPLATE #3
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Third Template
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a class="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-300 hover:text-white font-serif font-semibold tr04">
              OCCASION
            </a>
            <a class="mr-5 cursor-pointer text-gray-300 hover:text-white font-serif font-semibold tr04">
              STYLE
            </a>
            <a class="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold font-serif  tr04">
              SALE
            </a>
          </div>
          <a className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold font-serif mt-1 tr04">
            {" "}
            ADVANCED SEARCH
          </a>
        </div>
      </div>
    </header>
  );
}
