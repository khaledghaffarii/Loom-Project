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
  }; var settings3 = {
    infinite: true,
    speed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    arrows: false,
  };
  return (
    <div>
      {" "}
      <div className="lg:flex justify-center">
        <div className=" p-10 lg:w-2/4">
          <Slider {...settings2}>
            <div className="">
              <Image src="/store.png" width={1468} height={570} />
            </div>
            <div>
              <Image src="/store2.png" width={1468} height={570} />
            </div>{" "}
            <div>
              <Image src="/store3.png" width={1468} height={570} />
            </div>{" "}
            <div>
              <Image src="/store4.png" width={1468} height={570} />
            </div>{" "}
            <div>
              <Image src="/store5.png" width={1468} height={570} />
            </div>
          </Slider>
        </div>

        <div className="  lg:w-3/2 pt-20 pl-10">
          {" "}
          <Image src="/logo.png" width={40} height={50} />
          <Slider {...settings}>
            {" "}
            <div>
              <p className="text-white font-mono">
                lOOM THE FIRST LOCAL SAUDI PLATFORM BRING OUT THE LOCAL SAUDI
                FASHION TO THE WORLD lOOM THE FIRST LOCAL SAUDI PLATFORM BRING
                OUT THE LOCAL SAUDI FASHION TO THE WORLD lOOM THE FIRST LOCAL
                SAUDI PLATFORM BRING OUT THE LOCAL SAUDI
              </p>
            </div>{" "}
            <div>
              <p className="text-white font-mono">
                lOOM THE FIRST LOCAL SAUDI PLATFORM BRING OUT THE LOCAL SAUDI
                FASHION TO THE WORLD
              </p>
            </div>{" "}
            <div>
              <p className="text-white font-mono">
                lOOM THE FIRST LOCAL SAUDI PLATFORM BRING OUT THE LOCAL SAUDI
                FASHION TO THE WORLD
              </p>
            </div>
          </Slider>
        </div>
      </div>
      <div className="flex justify-center pt-36">
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
