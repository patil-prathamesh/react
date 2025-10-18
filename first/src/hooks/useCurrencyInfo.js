

import { useState } from "react"
import { useEffect } from "react"

const useCurrencyInfo = (currency) => {
    const [info, setInfo] = useState({})
    useEffect(() => {
        const getCurrencyInfo = async () => {
            const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            const data = await res.json();
            setInfo(data[currency])
        }
        getCurrencyInfo()
    }, [currency])

    return info;
}

export default useCurrencyInfo