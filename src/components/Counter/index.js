import React, { useState } from 'react';

const Counter = () => {
    
    const handleClick = (value) => {
        console.log("decrement value: ", value);
    }

    const handleReset = () => {
        console.log("handle reset clicked");
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h3>Count: 0</h3>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={() => handleClick(1)}>Increment</button>
                {
                    false ? (
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
