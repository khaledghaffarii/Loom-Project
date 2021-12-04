import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
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
    <div className=" pb-48 ">
      <div className="flex justify-center p-20 ">
        <div className="w-20 h-10 border-l"></div>{" "}
        <h1 className="text-center text-white  text-5xl font-mono  hover:bg-gray-900 cursor-pointer">
          Our Brands
        </h1>
      </div>
      <div className="lg:flex lg:justify-center lg:pt-20 lg:pb-20 bg-white">
        <div className="grid grid-cols-3 gap-4  ">
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
          {/* <div>
            <Image
              src="/faviana.png"
              width={1000}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div>
            {" "}
            <Image
              src="/jadore.png"
              width={1000}
              height={300}
              objectFit="contain "
            />
          </div>
          <div>
            {" "}
            <Image
              src="/jovani.png"
              width={1000}
              height={300}
              objectFit="contain "
            />
          </div>{" "}
          <div>
            <Image
              src="/lara.png"
              width={1000}
              height={300}
              objectFit="contain "
            />
          </div>{" "}
          <div>
            {" "}
            <Image
              src="/morrell.png"
              width={1000}
              height={300}
              objectFit="contain "
            />
          </div>
          <div>
            {" "}
            <Image
              src="/portia.png"
              width={1000}
              height={300}
              objectFit="contain "
            />
          </div>{" "}
          <div>
            <Image
              src="/sherri.png"
              width={1000}
              height={300}
              objectFit="contain "
            />
          </div>{" "}
          <div>
            {" "}
            <Image
              src="/tarik.png"
              width={1000}
              height={300}
              objectFit="contain "
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Brands;
