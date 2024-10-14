"use client"

import { Metadata } from "next"
import { useState } from "react"
import { IoMenu, IoClose } from "react-icons/io5"

export default function Test() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    type DropDownItem = {
        symbol: string
        text: string
    }

    const DropDownItem = ({ symbol, text }: DropDownItem) => {

        return (
            <li className={`dropdownItem flex justify-start
            gap-x-[30px]`}>
                <p>{symbol}</p>
                <p>{text}</p>
            </li>
        )
    }

    return (
        <div className={`w-screen h-screen`}>
            <div className={`menu-container`}>
                <div onClick={() => setIsMenuOpen((prev) => !prev)}
                className={`absolute top-[10px] right-[10px]
                menu-trigger w-[30px] mb-[20px] cursor-pointer overflow-hidden`}>
                    {!isMenuOpen ? ( <IoMenu size={30} /> ) : ( <IoClose size={30} /> )}
                </div>

                <div className={`absolute top-[50px] right-[10px]
                dropdown-menu flex flex-col justify-center items-center
                bg-yellow-300 rounded-xl px-[10px] py-[20px] w-[200px]
                ${isMenuOpen ? ( "active" ) : ( "inactive" )}`}>
                    <p>The Anh</p>
                    <p>Web Des</p>
                    <ul className={`mt-[30px] space-y-[10px]`}>
                        <DropDownItem symbol="X" text="Trang Chủ" />
                        <DropDownItem symbol="X" text="Sách" />
                        <DropDownItem symbol="X" text="Tác giả" />
                        <DropDownItem symbol="X" text="Liên hệ" />
                    </ul>
                </div>
            </div>

        </div>
    )
}