import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
function Carousel() {
  var settings = {
    infinite: true,
    speed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    arrows: false,
  };
  var settings2 = {
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    arrows: false,
  };
  var settings3 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    dots: true,
    touchMove: true,
  };
  return (
    <div>
      {" "}
      <div className="lg:flex justify-center ">
        <div className=" lg:p-10 ">
          <Slider {...settings2}>
            <div className="">
              <Image src="/store.png" width={1468} height={470} />
            </div>
            <div>
              <Image src="/store2.png" width={1468} height={470} />
            </div>{" "}
            <div>
              <Image src="/store3.png" width={1468} height={470} />
            </div>{" "}
            <div>
              <Image src="/store4.png" width={1468} height={470} />
            </div>{" "}
            <div>
              <Image src="/store5.png" width={1468} height={470} />
            </div>
          </Slider>
        </div>

        <div className="  lg:w-3/2 lg:pt-20 lg:pl-10">
          {" "}
          <div className="lg:flex pb-10">
            <Image
              src="/logo5.png"
              width={40}
              height={40}
              className="animate-spin pr "
            />
            <Image src="/loom4.png" width={150} height={10} className=" " />
          </div>
          <Slider {...settings}>
            {" "}
            <div>
              <p className="text-white font-mono">
                lOOM THE FIRST LOCAL SAUDI PLATFORM BRING OUT THE LOCAL SAUDI
                FASHION TO THE WORLD
              </p>
            </div>{" "}
            <div>
              <p className="text-white font-mono">
                BEFORE ANY ITEM IS POSTED TO THE MILINOS WEBSITE, IT IS CHECKED
                BY OUR IN HOUSE AUTHENTICATION TEAM, AS WELL AS THE TEAM AT
                AUTHENTICATE FIRST - WHO SPECIALIZES IN SPECIFIC BRAND NAMES.
              </p>
            </div>{" "}
            <div>
              <p className="text-white font-mono">
                A creator, artisan and seller of high-quality objects since loom
                is an independent, family-owned French house that employs more
                than 16,600 people worldwide.
              </p>
            </div>
          </Slider>
        </div>
      </div>
      <div className="lgflex lg:justify-center lg:pt-36">
        <div className="lg:w-2/3 ">
          {" "}
          <Slider {...settings3}>
            <div>
              <Image src="/couture2.png" width={2000} height={800} />
            </div>{" "}
            <div>
              {" "}
              <Image src="/couture3.jpg" width={2000} height={800} />
            </div>
            <div>
              {" "}
              <Image src="/couture5.jpeg" width={2000} height={800} />
            </div>
            <div>
              {" "}
              <Image src="/couture5.jpg" width={2000} height={800} />
            </div>
            <div>
              {" "}
              <Image src="/couture6.jpg" width={2000} height={800} />
            </div>{" "}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
