import Image from "next/image";
function Footer() {
  return (
    <div className=" bg-gray-900 ">
      <div className="grid lg:grid-cols-4 grid-cols-2 bg-gray-900  p-6 ">
        <div className="">
          {" "}
          <p className="text-white pb-6 font-serif text-2xl  ">ABOUT Us</p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            About Us
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Contact Us
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Reviews
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Fashion Blog
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Shop Instagram
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif    ">
            Book An Appointment
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif -pl-11  ">
            {" "}
          </p>
        </div>
        <div className="pb-11 pl-11">
          {" "}
          <p className="text-white pb-6 font-serif text-2xl  ">INFO</p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Return Policy
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Shipping Policy
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Privacy Policy
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Terms & Conditions
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Careers
          </p>{" "}
        </div>{" "}
        <div className="pb-11">
          {" "}
          <p className="text-white pb-6 font-serif text-2xl  ">CONNECT</p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            <input
              class="appearance-none block lg:w-80 w-48 bg-gray-900 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="Email Enter Address"
            />
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif">
            <button
              class="shadow bg-red-900 w-36 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Subscribe
            </button>
          </p>{" "}
        </div>
        <div className="pb-11 pl-11">
          {" "}
          <p className="text-white pb-6 font-serif text-2xl  ">SHOP</p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            New Arrivals
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Evening Dresses
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Prom Dresses
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Wedding Guest Dresses
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Special Occasions
          </p>{" "}
          <p className="text-white pb-6 cursor-pointer font-serif   ">
            Mother of the Bride
          </p>{" "}
        </div>{" "}
      </div>
      <div className="cursor-pointer pl-3 lg:flex lg:justify-between ">
        <Image
          src="/footerImage.png"
          width={170}
          height={200}
          objectFit="contain "
          className="cursor-pointer "
        />
        <div className="flex lg:p-5 pr-11">
          <div className="pl-3">
            <Image
              src="/tof2.png"
              width={50}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div className="pl-3">
            <Image
              src="/tof3.png"
              width={50}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div className="pl-3">
            <Image
              src="/tof4.png"
              width={50}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div className="pl-3">
            <Image
              src="/tof5.png"
              width={50}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div className="pl-3">
            <Image
              src="/tof6.png"
              width={50}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div className="pl-3">
            <Image
              src="/tof7.png"
              width={50}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div className="pl-3">
            <Image
              src="/tof8.png"
              width={50}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div className="pl-3">
            <Image
              src="/tof9.png"
              width={50}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div className="pl-3">
            <Image
              src="/tof10.png"
              width={50}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div className="pl-3">
            <Image
              src="/tof12.png"
              width={50}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
          <div className="pl-3">
            <Image
              src="/tof13.png"
              width={50}
              height={200}
              objectFit="contain "
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
