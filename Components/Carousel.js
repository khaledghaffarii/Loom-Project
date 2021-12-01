import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
function Carousel() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    arrows: false,
  };

  return (
    <div className="lg:flex ">
      <div className=" p-10 lg:w-1/4">
        <Slider {...settings}>
          <div className="">
            <Image src="/arab1.jpg" width={468} height={638} />
          </div>
          <div>
            <Image src="/arab3.png" width={468} height={638} />
          </div>{" "}
          <div>
            <Image src="/arab4.jpg" width={468} height={638} />
          </div>{" "}
          <div>
            <Image src="/arab5.jpg" width={468} height={638} />
          </div>{" "}
          <div>
            <Image src="/image1.jpg" width={468} height={638} />
          </div>
        </Slider>
      </div>
      <div>
      <div className="text-center pt-20 " style={{marginLeft:-200}}>
            <Image src="/loom.png" width={100} height={150} />
          </div>
        <p className="text-white p-20 font-mono" style={{}}>
          lOOM THE FIRST LOCAL SAUDI PLATFORM BRING OUT THE LOCAL SAUDI FASHION
          TO THE WORLD lOOM THE FIRST LOCAL SAUDI PLATFORM BRING OUT THE LOCAL
          SAUDI FASHION TO THE WORLD lOOM THE FIRST LOCAL SAUDI PLATFORM BRING OUT THE LOCAL SAUDI FASHION
          TO THE WORLD  lOOM THE FIRST LOCAL SAUDI PLATFORM BRING OUT THE LOCAL SAUDI FASHION
          TO THE WORLD lOOM THE FIRST LOCAL SAUDI PLATFORM BRING OUT THE LOCAL
          SAUDI FASHION TO THE WORLD lOOM THE FIRST LOCAL SAUDI PLATFORM BRING OUT THE LOCAL SAUDI FASHION
          TO THE WORLD  lOOM THE FIRST LOCAL SAUDI PLATFORM BRING OUT THE LOCAL SAUDI FASHION
          TO THE WORLD lOOM THE FIRST LOCAL SAUDI PLATFORM BRING OUT THE LOCAL
          SAUDI FASHION TO THE WORLD lOOM THE FIRST LOCAL SAUDI PLATFORM BRING OUT THE LOCAL SAUDI FASHION
          TO THE WORLD 
        </p>
      </div>
    </div>
  );
}

export default Carousel;
