import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,  } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Brands() {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
    arrows: false,
  };
  return (
    <div className=" lg:pb-48 ">
      <div className="flex justify-center p-20 ">
        <div className="lg:w-20 lg:h-10 lg:border-l"></div>{" "}
        <h1 className="text-center text-white text-xl lg:text-5xl font-mono  hover:bg-gray-900 cursor-pointer">
          Our Brands
        </h1>
      </div>
      <div className="lg:flex lg:justify-center lg:pt-20 lg:pb-20 bg-white">
        <div className="lg:grid grid-cols-3 gap-4  ">
          {" "}
          <div className="animate-pulse cursor-pointer hover:scale-90 transition transform -200 ease-out ">
            <Image
              src="/alyce.png"
              width={1000}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div className="animate-pulse cursor-pointer hover:scale-90 transition transform -200 ease-out ">
            {" "}
            <Image
              src="/d.jpg"
              width={1000}
              height={200}
              objectFit="contain "
            />
          </div>
          <div className="animate-pulse cursor-pointer hover:scale-90 transition transform -200 ease-out ">
            {" "}
            <Image
              src="/guu.jpg"
              width={1000}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div className="animate-pulse cursor-pointer hover:scale-90 transition transform -200 ease-out ">
            <Image
              src="/cameron.png"
              width={1000}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div className="animate-pulse cursor-pointer hover:scale-90 transition transform -200 ease-out ">
            {" "}
            <Image
              src="/clarisse.png"
              width={1000}
              height={200}
              objectFit="contain "
            />
          </div>
          <div className="animate-pulse cursor-pointer hover:scale-90 transition transform -200 ease-out ">
            {" "}
            <Image
              src="/elie.png"
              width={1000}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
        </div>
      </div>{" "}
      <div className="flex justify-center p-20 ">
        <div className="lg:w-20 lg:h-10 lg:border-l"></div>{" "}
        <h1 className="text-center text-white  lg:text-5xl text-xl font-mono  hover:bg-gray-900 cursor-pointer">
          STAY IN THE KNOW
        </h1>
      </div>{" "}
      <div className="lg:flex lg:justify-center pl-8 lg:pl-0">
        {" "}
        <Image
          className=" animate-pulse cursor-pointer hover:scale-90 transition transform -200 ease-out "
          src="/call.jpg"
          width={300}
          height={200}
          objectFit="contain"
        />
        <div>
          {" "}
          <p className=" text-white text-sm font-serif p-5 lg:w-96">
            Sign up for our mailing list and get weekly updates on new
            additions, sales, promotions, and more!
          </p>
          <div class="lg:w-full px-3">
            <input
              class="appearance-none block lg:w-96 bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="Email Enter Address"
            />
            <div class="md:w-2/3 lg:pl-60 pl-16">
              <button
                class="shadow bg-red-900 w-36 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-11">
        {" "}
        <div className="cursor-pointer">
          {" "}
          <FontAwesomeIcon icon={faFacebookF} color="white" />
        </div>
        <div className="pl-5 cursor-pointer ">
          <FontAwesomeIcon icon={faTwitter} color="white" />{" "}
        </div>
        <div className="pl-5 cursor-pointer">
          {" "}
          <FontAwesomeIcon icon={faLinkedin} color="white" />{" "}
          
        </div>
      </div>
    </div>
  );
}

export default Brands;
