"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Baloo_Paaji_2 } from "next/font/google";

const balooPaaji2 = Baloo_Paaji_2({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["vietnamese", "latin"],
});

type DropDownItem = {
  href: string;
  text: string;
};

const DropDownItem = ({ href, text }: DropDownItem) => {
  return (
    <Link
      className={`${balooPaaji2.className} font-normal
        text-[20px] text-black hover:bg-gray-100/30 px-[10px]
        w-[80%]
        py-[5px] rounded-lg hover:scale-[1.1] hover:font-semibold
        transition-all duration-[170ms] ease-in-out`}
      href={href}
    >
      {text}
    </Link>
  );
};

const DropDownState = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div>
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`cursor-pointer absolute top-[34px]
            right-[15px]`}
        >
          <div
            className={`transition-all duration-[250ms] ease-in-out
            absolute top-0 right-0
            ${isMenuOpen
            ? "-rotate-90 opacity-0 scale-0"
            : "rotate-0 opacity-100 scale-100"
            }`}
          >
            <IoMenu size={30} />
          </div>
          <div
            className={`transition-all duration-[250ms] ease-in-out
            absolute top-0 right-0
            ${!isMenuOpen
            ? "rotate-90 opacity-0 scale-0"
            : "rotate-0 opacity-100 scale-100"
            }`}
          >
            <IoClose size={30} />
          </div>
        </div>

        <div
          className={`absolute top-[120px] right-[50px] z-[30]
            w-[200px] h-[250px] bg-black/30 backdrop-blur-md
            rounded-xl py-[10px] flex flex-col justify-around items-center
            ${isMenuOpen ? "active" : "inactive"}
            `}
        >
          <DropDownItem href="/" text="Trang chủ" />
          <DropDownItem href="/booksPage" text="Sách" />
          <DropDownItem href="/authorsPage" text="Tác giả" />
          <DropDownItem href="/" text="Về chúng tôi?" />
          <DropDownItem href="/" text="Liên hệ" />
        </div>
      </div>
    </div>
  );
};

export default DropDownState;
