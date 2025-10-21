import { useState } from "react"
import { useEffect } from "react"

const useLanguages = () => {
    const [languages, setLanguages] = useState([])
    useEffect(() => {
        const fetchLanguages = async () => {
            const res = await fetch('https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json')
            const data = await res.json();
            setLanguages(data);
        }
        fetchLanguages()
    },[])
    return languages;
}

export default useLanguages;