import { useEffect } from "react";
import { useCounterStore } from "./store"

const logCount = () => {
  // let count = useCounterStore.getState().count;
  useCounterStore.setState({count: 99})
  // console.log(count)
}

const App = () => {
  console.log("render")
  const count = useCounterStore((state) => state.count)
  useEffect(() => logCount(), [count])
  return (
    <OtherComponent />
  )
}

export default App;

const OtherComponent = () => {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((store) => store.incrementAsync)
  const decrement = useCounterStore((store) => store.decrement)
  const isLoading = useCounterStore((state) => state.isLoading)
  return (
    <>
      <div>{count}</div>
      {isLoading ? <p>Loading...</p> : <button onClick={increment}>Increment</button>}
      <button onClick={decrement}>Decrement</button>
    </>
  )
}
