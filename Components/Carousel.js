import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
  ShoppingCartIcon,
  StarIcon,
} from "@heroicons/react/solid";
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
      <div className="flex justify-between w-full -mt-20 mb-20 fixed cursor-pointer shadow-sm">
        <div className=" flex h-11 w-48 mt-96 -ml-16 bg-white transform rotate-90 hover:scale-y-110 transition  ">
          <p className="mr-5 ml-1 "><span className="text-bold">4.3</span> /5</p>
          <div>
            <Image
              className=" "
              src="/reviewsio-logo.svg"
              width={100}
              height={10}
            />
            <div className="flex">
              <StarIcon className="h-5 w-5 text-black" />
              <StarIcon className="h-5 w-5 text-black" />
              <StarIcon className="h-5 w-5 text-black" />
              <StarIcon className="h-5 w-5 text-black" />
              <StarIcon className="h-5 w-5 text-black" />
            </div>
          </div>
        </div>

        <div className="flex cursor-pointer ">
          <div className="bg-white w-16 p-4 -mr-28 rounded-full h-16 mr-11 hover:scale-90 transition transform -200 ease-out ">
            <div className=" -top-2 -right-2 -mt-4 -ml-5 w-5 -mr-4 bg-red-500 rounded-full h-5">
              <p className="text-white text-sm text-center"> 0 </p>
            </div>
            <ShoppingCartIcon className="h-7  animate-pulse text-black  " />
          </div>
           <div className=" flex bg-blue opacity-90 h-11 w-36 mt-96 mr-1 bg-white transform  hover:scale-y-110 transition  ">
              <div>
              
              <HeartIcon className="h-7  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white pl-6 pt-1 mt-1" />
              </div>
              <p className="mt-2 ml-3 text-white ">Favorit</p>
            </div>
        </div>
        
      </div>{" "}
      <div className="lg:flex mt-28 ml-8 justify-center ">
        <div className=" lg:p-10 ">
          <Slider {...settings2}>
            <div className="">
              <Image src="/store.png" width={1450} height={470} />
            </div>
            <div>
              <Image src="/store2.png" width={1450} height={470} />
            </div>{" "}
            <div>
              <Image src="/store3.png" width={1450} height={470} />
            </div>{" "}
            <div>
              <Image src="/store4.png" width={1450} height={470} />
            </div>{" "}
            <div>
              <Image src="/store5.png" width={1450} height={470} />
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
              className="animate-spin "
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
      
      <div className="lg:flex lg:justify-between lg:pt-36  ">
        <div className="lg:w-2/3 rounded-xl ml-80">
          {" "}
          <Slider {...settings3}>
            <div>
              <Image
                src="/couture2.png"
                className=" rounded-xl "
                width={2000}
                height={800}
              />
            </div>{" "}
            <div>
              {" "}
              <Image
                className=" rounded-xl "
                src="/couture3.jpg"
                width={2000}
                height={800}
              />
            </div>
            <div>
              {" "}
              <Image
                className=" rounded-xl "
                src="/couture5.jpeg"
                width={2000}
                height={800}
              />
            </div>
            <div>
              {" "}
              <Image
                className=" rounded-xl "
                src="/couture5.jpg"
                width={2000}
                height={800}
              />
            </div>
            <div>
              {" "}
              <Image
                className=" rounded-xl "
                src="/couture6.jpg"
                width={2000}
                height={800}
              />
            </div>{" "}
          </Slider>
          
        </div>
          
        
      </div>
      
      
    </div>
  );
}

export default Carousel;
