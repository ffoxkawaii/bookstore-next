import Link from "next/link";

const NavbarLink = () => {
  return (
    <div
      className={`flex
        felx-row
        gap-x-[30px]
        justify-center
        items-center
        text-center`}
    >
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
        Sách
      </Link>
      <Link
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
      </Link>
    </div>
  );
}

export default NavbarLink;
