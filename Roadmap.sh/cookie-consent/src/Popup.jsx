const Popup = ({handleConsent}) => {
    const acceptConsent = () => {
        localStorage.setItem('cookie-consent', true)
        handleConsent(true)
    }
    return (
        <div className="bg-blue-400 text-white w-[500px] rounded absolute top-[200px] left-[600px]">
            <h2 className="text-black text-center text-lg">Cookies Conset</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit aliquid facere obcaecati eligendi sequi nam ad quos, dolore hic molestiae aliquam rem repellendus vel sunt? Assumenda eius architecto suscipit similique, ullam commodi laborum eaque beatae quam, deserunt veniam dolore obcaecati, libero dolorum iste consequuntur tempore ducimus temporibus perferendis harum!</p>
            <div className="flex justify-center items-center">
                <button onClick={acceptConsent} className="bg-blue-800 text-white px-3 py-2 rounded m-2 hover:cursor-pointer">Accept</button>
                <button className="border px-3 py-2 hover:cursor-pointer">Decline</button>
            </div>
        </div>
    )
}

export default Popup;