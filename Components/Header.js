import  Image  from "next/image";
import Images from '../assets/loomLogo.webp'
function Header() {
  return (
    <div className="flex justify-between  max-w-6xl mx-5 xl:mx-auto">
      <div
        onClick={() => router.push("/")}
        className="relative w-24 hidden lg:inline-grid cursor-pointer "
      >
        {" "}
        <Image
          src={Images}
          layout="fill"
          objectFit="contain"
          priority={false}
        />
      </div>
    </div>
  );
}

export default Header;
