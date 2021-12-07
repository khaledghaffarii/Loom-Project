import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
function publicity() {
  return (
    <div className="py-10 ">
      {" "}
      <div className=" flex space-x-4 pb-10 justify-center border-b border-gray-700 pt-20 ">
        <Image
          src="https://i.imgur.com/G44C71q.png"
          width={239}
          height={63}
          className="cursor-pointer hover:scale-110 transition transform -200 ease-out"
        />
        <div>
          <p className="text-gray-300 cursor-pointer hover:scale-110 transition transform -200 ease-out">
            Read our <span className="font-bold text-white"> 4542 </span>{" "}
            reviews{" "}
          </p>
          <div className="flex">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-yellow-400" />
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center  text-center  lg:pt-36 pb-20 ">
        <div className="lg:grid lg:pr-20">
          {" "}
          <Image
            src="https://i.imgur.com/SW28Kws.png "
            width={256}
            height={256}
            className=" cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />{" "}
          <Image
            src="https://i.imgur.com/GQImm4G.png "
            width={256}
            height={256}
            className=" cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />
        </div>
        <Image
          src="https://i.imgur.com/1NYhbpZ.png "
          width={550}
          height={550}
          className="animate-pulse  cursor-pointer hover:scale-110 transition transform -200 ease-out"
        />
        <div className="lg:grid lg:pl-20">
          {" "}
          <Image
            src="https://i.imgur.com/HqaSbaA.png "
            width={256}
            height={256}
            className=" cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />
          <Image
            src="https://i.imgur.com/Lz50THu.png"
            width={256}
            height={256}
            className=" cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="pr-3">
          {" "}
          <Image
            src="https://i.imgur.com/42CzZkv.png"
            width={25}
            height={25}
            className=" p-[1.5px] object-contain  cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />{" "}
        </div>{" "}
        <div className="pr-2">
          {" "}
          <Image
            src="https://i.imgur.com/0gNwwkN.png"
            width={25}
            height={25}
            className=" cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />{" "}
        </div>
        <div className="pr-2">
          {" "}
          <Image
            src="https://i.imgur.com/AmROcs4.png"
            width={25}
            height={25}
            className=" cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />{" "}
        </div>
        <div className="pr-2">
          {" "}
          <Image
            src="https://i.imgur.com/gf4tQKN.png "
            width={25}
            height={25}
            className=" cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />{" "}
        </div>
        <div className="pr-2">
          {" "}
          <Image
            src="https://i.imgur.com/o4gstag.png"
            width={25}
            height={25}
            className=" cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />{" "}
        </div>
        <div className="pr-2">
          {" "}
          <Image
            src="https://i.imgur.com/9nhNCLl.png"
            width={25}
            height={25}
            className=" cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />
        </div>
      </div>
      <p className="text-white text-center p-5 font-mono cursor-pointer hover:scale-90 transition transform -200 ease-out">
        1000'S OF DRESSES IN STOCK
      </p>
    </div>
  );
}

export default publicity;
