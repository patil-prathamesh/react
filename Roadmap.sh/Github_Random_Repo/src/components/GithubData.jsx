import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaCodeFork } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
const GithubData = ({ data }) => {
    const [index, setIndex] = useState(5)
    console.log("====")
    const refresh = () => {
        let random = (Math.ceil(Math.random()*30))
        console.log(random)
        setIndex(random)
    }
    return (
        <div>
            <div className="w-full border-2 mt-3 p-2 rounded-lg">
                <h3 className="text-[19px]">{data[index].name}</h3>
                <p className="pt-3 pb-3 text-gray-400">{data[index].description}</p>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-x-[2px]">
                        <div className="h-[9px] w-[9px] rounded-full bg-blue-300"></div>
                        <p className="text-[12px]">{data[index].language}</p>
                    </div>
                    <div className="flex items-center gap-x-[2px]">
                        <FaStar />
                        <p className="text-[12px]">{data[index].stargazers_count}</p>
                    </div>
                    <div className="flex items-center gap-x-[2px]">
                        <FaCodeFork size={14} className="text-gray-600"  color="#4A5568"/>
                        <p className="text-[12px]">{data[index].forks}</p>
                    </div>
                    <div className="flex items-center gap-x-[2px]">
                        <IoMdInformationCircleOutline />
                        <p className="text-[12px]">{data[index].open_issues}</p>
                    </div>
                </div>
            </div>
            <button className="w-full bg-black text-white rounded-lg  p-3 hover:cursor-pointer mt-3" onClick={refresh}>Refresh</button>
        </div>

    )
}

export default GithubData;