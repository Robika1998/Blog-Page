import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo/logo.png";
import searchLogo from "../../public/assets/image/search.png";
import downLogo from "../../public/assets/image/down.png";
import listIcon from "../../public/assets/image/listIcon.png";
import MobileMenu from "./ResponsiveComponents/NavbarListResponsive";
import logoResponse from "../../public/assets/image/respLogo.png";

const Navbar = () => {
  let isMenuOpen = false;
  const toggleMenu = () => {
    const menu = document.querySelector("#mobile-menu");
    menu?.classList.toggle("hidden");
  };

  return (
    <nav className="bg-bcBg lg:bg-white border-b shadow-sm ">
      <div className="container mx-auto px-4 h-[80px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt="Logo"
            width={260}
            height={250}
            className="hidden lg:block"
          />

          <Image
            src={logoResponse}
            alt="Logo"
            width={50}
            height={50}
            className="lg:hidden"
          />
        </div>

        <div className="hidden lg:flex gap-16 px-5">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <Link href="" className="hover:text-blue-600">
                ბლოგი
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-blue-600">
                მედია
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-blue-600">
                კარიერა
              </Link>
            </li>
            <li>
              <p className="hover:text-blue-600 cursor-pointer">კონტაქტი</p>
            </li>
            <li className="relative font-bold">
              LIVE
              <span className="absolute top-1/2  transform translate-x-2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
            </li>
          </ul>

          <div className="flex items-center gap-4 ">
            <div className="relative">
              <input
                type="text"
                className="border rounded-full px-4 py-1 w-[207px] "
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Image src={searchLogo} alt="Logo" width={20} height={20} />
              </button>
            </div>

            <div className="relative gap-3">
              <button className="flex items-center gap-1 text-sm font-medium">
                ქარ
                <span>
                  <Image src={downLogo} alt="Logo" width={20} height={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700">
            <Image src={listIcon} alt="Menu" width={30} height={30} />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} />

      <div className="bg-bcBg text-white h-[69px] hidden lg:flex items-center">
        <ul className="container mx-auto flex gap-6 text-sm font-medium px-6 justify-around">
          <li>
            <Link href="" className="hover:underline">
              ბანკის შესახებ
            </Link>
          </li>
          <li>
            <Link href="" className="hover:underline">
              მონეტარული პოლიტიკა
            </Link>
          </li>
          <li>
            <Link href="" className="hover:underline">
              ფინანსური სტატისტიკა
            </Link>
          </li>
          <li>
            <Link href="" className="hover:underline">
              ზედამხედველობა
            </Link>
          </li>
          <li>
            <Link href="" className="hover:underline">
              ქართული ფული
            </Link>
          </li>
          <li>
            <Link href="" className="hover:underline">
              საგადასახადო სისტემები
            </Link>
          </li>
          <li>
            <Link href="" className="hover:underline">
              სტატისტიკა
            </Link>
          </li>
          <li>
            <Link href="" className="hover:underline">
              პუბლიკაციები
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
