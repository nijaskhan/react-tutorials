import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    const [showDecrement, setShowDecrement] = useState(false);

    const handleClick = (value) => {
        // 2 + -1 = 1
        // 2 + 1 = 3

        // console.log("decrement count: ", count);
        // console.log("decrement value: ", value);

        if ((count + value) <= 0) {
            setShowDecrement(false);
        } else {
            setShowDecrement(true);
        }
        setCount(count + value);
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h3>Count: {count}</h3>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={() => handleClick(1)}>Increment</button>
                {
                    showDecrement ? (
                        <button
                            style={{ marginLeft: "6px" }}
                            onClick={() => handleClick(-1)}
                        >
                            Decrement
                        </button>
                    ) : (
                        <button
                            style={{ marginLeft: "6px" }}
                            onClick={() => handleClick(-1)}
                            disabled={true}
                        >
                            Decrement
                        </button>
                    )
                }
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;
