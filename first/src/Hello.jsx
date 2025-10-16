function Hello() {
    console.log("hello")
    return (
        <div>
            <h1>Hello... {}</h1>
            <Nested />
        </div>
    )
}

const Nested = () => {
    console.log('rendered')
    return (
        <div>nested</div>
    )
}

const obj = {
    hello: 45,
    boy: 21,
    age: 55,
    loc: "mumbai"
}

const Temp = ({count}) => {
    return (
        <div>Temp {count}</div>
    )
}

export {Hello, Temp, obj}