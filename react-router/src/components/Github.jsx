import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const Github = () => {
    const data = useLoaderData()
    console.log(data, " **8")
    return (
        <div>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="" /></div>
    )
}

export default Github;

export const githubInfoLoader = async() => {
    const res = await fetch('https://api.github.com/users/patil-prathamesh')
    return res.json()
}