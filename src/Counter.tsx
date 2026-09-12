import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleIncrease = () =>{
        setCount(count + 1);
    }

    const handleDecrease = () =>{
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>Current count: {count}</p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}