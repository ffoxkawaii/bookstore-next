import Link from "next/link";
import SearchBar from "./SearchBar";
import DropdownMenu from "./dropdownMenu";

const NavbarLink = () => {
  return (
    <div
      className={`flex
        felx-row
        justify-center
        items-center
        text-center`}
    >
      <div className="p-4">
      <DropdownMenu />
    </div>
      {/* <Link
        href="/"
        className={`font-normal text-[18px]
        text-[#62666c]
        hover:scale-[1.1]
        hover:text-black
        transition-all
        duration-200
        ease-in-out
        hover:font-semibold`}
      >
        Trang chủ
      </Link>
      <Link
        href="/booksPage"
        className={`font-normal text-[18px]
        text-[#62666c]
        hover:scale-[1.1]
        hover:text-black
        transition-all
        duration-200
        ease-in-out
        hover:font-semibold`}
      >
        Cửa hàng
      </Link> */}
      <SearchBar />

      {/* chuyển component này thành một phần trong page Cửa hàng */}
      {/* <Link
        href="/authorsPage"
        className={`font-normal text-[18px]
        text-[#62666c]
        hover:scale-[1.1]
        hover:text-black
        transition-all
        duration-200
        ease-in-out
        hover:font-semibold`}
      >
        Tác giả
      </Link> */}

      {/* chuyển component này thành một phần trong footer */}
      {/* <Link
        href="/"
        className={`font-normal text-[18px]
        text-[#62666c]
        hover:scale-[1.1]
        hover:text-black
        transition-all
        duration-200
        ease-in-out
        hover:font-semibold`}
      >
        Về chúng tôi?
      </Link>
      <Link
        href="/"
        className={`font-normal text-[18px]
        text-[#62666c]
        hover:scale-[1.1]
        hover:text-black
        transition-all
        duration-200
        ease-in-out
        hover:font-semibold`}
      >
        Liên hệ
      </Link> */}
    </div>
  );
}

export default NavbarLink;
