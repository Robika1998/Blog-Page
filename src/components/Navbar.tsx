import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo/logo.png";
import searchLogo from "../../public/assets/image/search.png";
import downLogo from "../../public/assets/image/down.png";
import homeLogo from "../../public/assets/image/home.png";
import linkdinLogo from "../../public/assets/image/social.png";
import rightLogo from "../../public/assets/image/right.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 h-[80px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="Logo" width={260} height={250} />
        </div>

        <div className="flex gap-16 px-5">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <Link href="/currency-rates" className="hover:text-blue-600">
                ბლოგი
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-blue-600">
                მედია
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
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
      </div>

      <div className="bg-[#32333E] text-white  h-[69px] flex items-center ">
        <ul className="container mx-auto flex gap-6 text-sm font-medium px-6 justify-around">
          <li>
            <Link href="/about" className="hover:underline">
              ბანკის შესახებ
            </Link>
          </li>
          <li>
            <Link href="/monetary-policy" className="hover:underline">
              მონეტარული პოლიტიკა
            </Link>
          </li>
          <li>
            <Link href="/statistics" className="hover:underline">
              ფინანსური სტატისტიკა
            </Link>
          </li>
          <li>
            <Link href="/regulations" className="hover:underline">
              ზედამხედველობა
            </Link>
          </li>
          <li>
            <Link href="/publications" className="hover:underline">
              ქართული ფული
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:underline">
              საგადასახადო სისტემები
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              სტატისტიკა
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              პუბლიკაციები
            </Link>
          </li>
        </ul>
      </div>

      <div className="h-[69px] container mx-auto flex px-9 text-sm font-medium  justify-between">
        <div className="flex items-center gap-4 ">
          <Image src={homeLogo} alt="Home Logo" width={17} height={13} />
          <Link href="">მთავარი </Link>
          <Image src={rightLogo} alt="Home Logo" width={8} height={8} />
          <Link href="">ბლოგი</Link>
        </div>
        <div className="flex items-center gap-2">
          <Image src={linkdinLogo} alt="LinkedIn Logo" width={20} height={20} />
          <Image src={linkdinLogo} alt="LinkedIn Logo" width={20} height={20} />
          <Image src={linkdinLogo} alt="LinkedIn Logo" width={20} height={20} />
          <Image src={linkdinLogo} alt="LinkedIn Logo" width={20} height={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
