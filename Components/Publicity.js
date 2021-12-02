import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
function publicity() {
  return (
    <div className="py-10 ">
      {" "}
      <div className=" lg:flex space-x-4 pb-10 justify-center border-b border-gray-700 pt-20 ">
        <Image
          src="/reviews.png "
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
      <div className="flex justify-center  text-center  pt-36 pb-36 ">
        <div className="grid pr-20">
          {" "}
          <Image
            src="/under6.png "
            width={256}
            height={256}
            className="cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />{" "}
          <Image
            src="/under4.png "
            width={256}
            height={256}
            className="cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />
        </div>
        <Image
          src="/black.png "
          width={550}
          height={550}
          className="animate-pulse cursor-pointer hover:scale-110 transition transform -200 ease-out"
        />
        <div className="grid pl-20">
          {" "}
          <Image
            src="/under5.png "
            width={256}
            height={256}
            className="cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />
          <Image
            src="/under3.png "
            width={256}
            height={256}
            className="cursor-pointer hover:scale-110 transition transform -200 ease-out"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/Facebook.png "
          width={25}
          height={25}
          className="cursor-pointer hover:scale-110 transition transform -200 ease-out p-[1.5px] object-contain "
        />{" "}
        <Image
          src="/twitter.png "
          width={25}
          height={25}
          className="cursor-pointer hover:scale-110 transition transform -200 ease-out"
        />{" "}
        <Image
          src="/instagram.png "
          width={25}
          height={25}
          className="cursor-pointer hover:scale-110 transition transform -200 ease-out"
        />{" "}
        <Image
          src="/pintrest.png "
          width={25}
          height={25}
          className="cursor-pointer hover:scale-110 transition transform -200 ease-out"
        />{" "}
        <Image
          src="/tumbir1.png "
          width={25}
          height={25}
          className="cursor-pointer hover:scale-110 transition transform -200 ease-out"
        />{" "}
        <Image
          src="/youtube.png "
          width={25}
          height={25}
          className="cursor-pointer hover:scale-110 transition transform -200 ease-out"
        />
      </div>
      <p className="text-white text-center p-5 font-mono cursor-pointer hover:scale-90 transition transform -200 ease-out">
        1000'S OF DRESSES IN STOCK
      </p>
    </div>
  );
}

export default publicity;
