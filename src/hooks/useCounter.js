import { useState } from "react"

export const useCounter = (initValue = 100) => {
    const [ count, setCount ] = useState(initValue)

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return [ count, inc, dec ]
}