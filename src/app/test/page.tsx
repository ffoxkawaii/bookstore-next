"use client"

import { useState, createContext } from "react";
import Text from "./text";

export const colorContext = createContext<string | null>(null)


export default function Test() {
  const [color, setColor] = useState("text-black")
  const toggleColor = () => {
    setColor(color === "text-black" ? "text-pink-500" : "text-black")
  }
  return (
    <colorContext.Provider value={ color }>
    <div>
      <button
      onClick={toggleColor}
      >Click Me</button>
      <Text />
    </div>
    </colorContext.Provider>
  )
}