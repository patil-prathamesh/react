import {NavLink} from 'react-router'

const Header = () => {
    return (
        <div>
            <li className="flex gap-x-4 m-2">
                <NavLink to={"first-tab"} className={({isActive}) => (
                    `bg-blue-300 p-3 hover:underline ${isActive ? "text-red-800" : "text-black"}`
                )}>First Tab</NavLink>
                <NavLink to={"second-tab"} className={({isActive}) => (
                    `bg-blue-300 p-3 hover:underline ${isActive ? "text-red-800" : "text-black"}`
                )}>Second Tab</NavLink>
                <NavLink to={"third-tab"} className={({isActive}) => (
                    `bg-blue-300 p-3 hover:underline ${isActive ? "text-red-800" : "text-black"}`
                )}>Third Tab</NavLink>
                <NavLink to={"fourth-tab"} className={({isActive}) => (
                    `bg-blue-300 p-3 hover:underline ${isActive ? "text-red-800" : "text-black"}`
                )}>Fourth Tab</NavLink>
            </li>
        </div>
    )
}

export default Header;