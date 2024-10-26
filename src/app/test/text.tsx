import { useContext } from "react"
import { colorContext } from "./page"

export default function Text() {
    const color = useContext(colorContext)

    return (
        <h1 className={`${color}`}>Hello World!</h1>
    )
}