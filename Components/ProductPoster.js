import { ArrowDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Transition } from "react-transition-group";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function ProductPoster({ in: inProp }) {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    touchMove: true,
  };

  const [man, setMan] = useState(true);
  const [accessory, setAccessory] = useState(false);
  const [baby, setBaby] = useState(false);
  const [girl, setGirl] = useState(false);
  const [style, setStyle] = useState({ display: "none" });
  function manFunction() {
    setMan(true);
    setBaby(false);
    setGirl(false);
    setAccessory(false);
  }
  function accessoryFunction() {
    setMan(false);
    setBaby(false);
    setGirl(false);
    setAccessory(true);
  }
  function babyFunction() {
    setMan(false);
    setBaby(true);
    setGirl(false);
    setAccessory(false);
  }
  function girlFunction() {
    setMan(false);
    setBaby(false);
    setGirl(true);
    setAccessory(false);
  }
  return (
    <div className="bg-blue">
      <div className="flex justify-center p-20">
        {" "}
        <h1 className="text-center text-white  text-6xl font-serif  ">
          NOW TRENDING
        </h1>
        <ArrowDownIcon className="h-12 w-20 text-white pt-2 animate-bounce" />
      </div>
      <div className="lg:flex justify-evenly p-10 ">
        {" "}
        <div>
          {" "}
          <div className=" pb-10 pt-11 cursor-pointer hover:bg-gray-900 ">
            {" "}
            <h1 className="text-center text-white font-medium font-serif text-4xl pb- ">
              All Product{" "}
            </h1>
            <p className="text-center text-white font-extralight font-serif ">
              View All
            </p>
          </div>
          <Image
            src="https://i.imgur.com/bjYEfbK.jpg"
            width={570}
            height={415}
            className=" cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />{" "}
        </div>
        <div>
          {" "}
          <div className=" pb-10 pt-11 cursor-pointer hover:bg-gray-900 ">
            {" "}
            <h1 className="text-center text-white font-medium font-serif text-4xl pb- ">
              New Inventory!{" "}
            </h1>
            <p className="text-center text-white font-extralight font-serif ">
              View All
            </p>
          </div>
          <Image
            src="https://i.imgur.com/P3AUgLa.jpg "
            width={570}
            height={415}
            className=" cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />
        </div>
      </div>
      <div className="lg:flex justify-center p-20 ">
        <div className="lg:w-20 lg:h-10 border-l"></div>{" "}
        <h1 className="text-center text-white  lg:text-3xl text-xl font-mono  hover:bg-gray-900 cursor-pointer">
          More to Explore
        </h1>
      </div>
      <div className="lg:flex justify-evenly p-10">
        {" "}
        <div className=" cursor-pointer hover:bg-gray-900 ">
          {" "}
          <Image
            src="https://i.imgur.com/NLbhf2s.jpg "
            width={400}
            height={557}
            className=" cursor-pointer "
          />{" "}
          <div className=" pb-10 pt-11 cursor-pointer hover:bg-gray-900 ">
            {" "}
            <h1 className="text-center text-white font-medium font-serif text-4xl pb- ">
              Collection{" "}
            </h1>
            <p className="text-center text-white font-extralight font-serif ">
              Explore Now
            </p>
          </div>
        </div>
        <div className=" cursor-pointer hover:bg-gray-900 ">
          {" "}
          <Image src="https://i.imgur.com/9qrq31V.jpg" width={400} height={557} />
          <div className=" pb-10 pt-11 cursor-pointer hover:bg-gray-900 ">
            {" "}
            <h1 className="text-center text-white font-medium font-serif text-4xl pb- ">
              Purple Label{" "}
            </h1>
            <p className="text-center text-white font-extralight font-serif ">
              Explore Now
            </p>
          </div>
        </div>
        <div className=" cursor-pointer hover:bg-gray-900 ">
          {" "}
          <Image
            src="https://i.imgur.com/ge4wqfj.jpg"
            width={400}
            height={557}
          />
          <div className=" pb-10 pt-11 cursor-pointer ">
            {" "}
            <h1 className="text-center text-white font-medium font-serif text-4xl pb- ">
              Accessories{" "}
            </h1>
            <p className="text-center text-white font-extralight font-serif ">
              Explore Now
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-20 ">
        <div className="lg:w-20 lg:h-10 lg:border-l"></div>{" "}
        <h1 className="text-center text-white  lg:text-3xl font-mono  hover:bg-gray-900 cursor-pointer">
          Best Category
        </h1>
      </div>
      <nav className=" flex justify-center pt-5 ml-5 lg:p-10 border-t border-gray-700">
        {man ? (
          <button className="text-gray-500 underline scale-90 pr-10  cursor-pointer  ">
            Man
          </button>
        ) : (
          <button
            onClick={() => {
              manFunction();
            }}
            className="text-white  pr-10 md:hover:underline hover:scale-90 transition transform -200 ease-out cursor-pointer  "
          >
            Man
          </button>
        )}
        {accessory ? (
          <button className=" pr-10 text-gray-500 underline scale-90 cursor-pointer">
            Accessories
          </button>
        ) : (
          <button
            onClick={() => {
              accessoryFunction();
            }}
            className="text-white  pr-10 md:hover:underline hover:scale-90 transition transform -200 ease-out cursor-pointer"
          >
            Accessories
          </button>
        )}
        {baby ? (
          <button className=" pr-10 text-gray-500 underline scale-90 cursor-pointer">
            Kids & Baby
          </button>
        ) : (
          <button
            onClick={() => {
              babyFunction();
            }}
            className="text-white  pr-10 md:hover:underline hover:scale-90 transition transform -200 ease-out cursor-pointer"
          >
            Kids & Baby
          </button>
        )}
        {girl ? (
          <button className=" pr-10 text-gray-500 underline scale-90 cursor-pointer">
            Girl
          </button>
        ) : (
          <button
            onClick={() => {
              girlFunction();
            }}
            className="text-white  pr-10 md:hover:underline hover:scale-90 transition transform -200 ease-out cursor-pointer"
          >
            Girl
          </button>
        )}
      </nav>
      {man ? (
        <div className="p-10 lg:pb-36 ">
          <Slider {...settings}>
            <div>
              <Image
                src="/arab1.jpg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>
            <div>
              <Image
                src="/arab4.jpg"
                width={254}
                height={400}
                className="rounded-xl "
              />
               <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/man3.jpg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/man1.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
               <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/man5.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/man6.webp"
                width={254}
                height={400}
                className="rounded-xl "
              />
               <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div className="">
              <Image
                src="/man9.jpg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/man10.jpg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/man11.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
               <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/man12.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
               <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/man13.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/man14.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
               <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/man15.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
               <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/man16.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
               <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>
          </Slider>
        </div>
      ) : null}
      {accessory ? (
        <div className="p-10 lg:pb-36 ">
          <Slider {...settings}>
            <div className="">
              <Image
                src="/acc1.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/acc2.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/acc3.webp"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/acc4.webp"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/acc5.webp"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/acc6.webp"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div className="">
              <Image
                src="/acc7.webp"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/acc8.jpg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/acc10.webp"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
          </Slider>
        </div>
      ) : null}{" "}
      {baby ? (
        <div className="p-10 lg:pb-36 ">
          <Slider {...settings}>
            <div className="">
              <Image
                src="/baby1.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/baby2.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/baby3.jpg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/baby4.jpg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/baby5.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/baby6.jpg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div className="">
              <Image
                src="/baby7.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/baby8.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/baby9.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/baby10.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/baby11.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
          </Slider>
        </div>
      ) : null}{" "}
      {girl ? (
        <div className="p-10 lg:pb-36 ">
          <Slider {...settings}>
            <div className="">
              <Image
                src="/girl1.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/girl2.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/girl3.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/girl4.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/girl5.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/girl6.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div className="">
              <Image
                src="/girl7.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/girl8.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/girl9.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/girl10.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
            <div>
              <Image
                src="/girl11.jpeg"
                width={254}
                height={400}
                className="rounded-xl "
              />
              <p className="text-white text-lg font-bold ml-2 cursor-pointer hover:scale-90 transition transform -200 ease-out "></p>{" "}
              <button className=" hidden lg:text-white text-md lg:w-36 lg:h-11 font-bold ml-11 mt-5 cursor-pointer hover:scale-90 transition transform -200 ease-out text-center font-mono">
                SHOP NOW
              </button>
              <div className="hidden lg:flex">
                <HeartIcon className="h-7 ml-11 mt-3 hover:scale-125 cursor-pointer transition-all -150 ease-out text-red-500 animate-pulse pl-10 pt-1" />
                <ShoppingCartIcon className="h-7 mt-3 ml-3  hover:scale-125 cursor-pointer transition-all -150 ease-out text-white animate-pulse pl- pt-1" />
              </div>
            </div>{" "}
          </Slider>
        </div>
      ) : null}
      <div className=" w-full bg-blue pb-20"></div>
    </div>
  );
}

export default ProductPoster;
