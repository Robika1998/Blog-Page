import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <div
      id="mobile-menu"
      className={`${
        isOpen ? "block" : "hidden"
      } bg-bcBg text-white py-4 lg:hidden`}
    >
      <ul className="flex flex-row flex-wrap items-center justify-center gap-4">
        <li>
          <Link href="#">
            <span className="hover:text-blue-400">ბანკის შესახებ</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span className="hover:text-blue-400">მონეტარული პოლიტიკა</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span className="hover:text-blue-400">ფინანსური სტატისტიკა</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span className="hover:text-blue-400">ზედამხედველობა</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span className="hover:text-blue-400">ქართული ფული</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span className="hover:text-blue-400">საგადასახადო სისტემები</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span className="hover:text-blue-400">სტატისტიკა</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span className="hover:text-blue-400">პუბლიკაციები</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
