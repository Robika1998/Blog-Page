import Image from "next/image";
import headerLogo from "../../public/assets/image/headerPhoto.png";
export default function Headers() {
  return (
    <div className="relative w-screen h-[575px]">
      <Image
        alt="Header Logo"
        src={headerLogo}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}
