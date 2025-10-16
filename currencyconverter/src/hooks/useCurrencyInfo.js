import { useEffect, useState } from "react";

const useCurrencyInfo = (currency = "usd") => {
    const [data, setData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            const data = await res.json()
            setData(data[currency])
        }
        fetchData()
    }, [currency])


    return data;
}

export default useCurrencyInfo;