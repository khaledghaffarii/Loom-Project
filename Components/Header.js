import { Image } from 'next/image';
function Header() {
  return (
    <div className="flex justify-between  max-w-6xl mx-5 xl:mx-auto">
      <Image
        src="../assets/loomLogo.webp"
        layout="fill"
        objectFit="contain"
        priority={false}
      />
    </div>
  );
}

export default Header;
