import { useState } from "react"
import { useEffect } from "react"
import { use } from "react"

const useGithubRepos = (language, setIsLoading) => {
    const [repoData, setRepoData] = useState({})
    useEffect(() => {
        const fetchRepo = async () => {
            if(language === "") return;
            setIsLoading(true)
            const res = await fetch(`https://api.github.com/search/repositories?q=language:${language}`)
            const data = await res.json(0)
            setRepoData(data["items"])
            setIsLoading(false)
        }
        fetchRepo(0)
    }, [language])
    return repoData
}

export default useGithubRepos