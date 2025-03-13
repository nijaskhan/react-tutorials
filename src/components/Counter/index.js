import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, reset } from '../../slices/counterSlice'

const Counter = () => {
    const count = useSelector((state) => {
        // console.log("state.counter.value: ", state.counter.value);
        return state.counter.value;
    });

    const showDecrement = useSelector((state) => state.counter.showDecrement);

    const dispatch = useDispatch();

    const handleClick = (value) => {
        // console.log("value: ", value);
        dispatch(increment(value));
    }

    const handleReset = () => {
        // console.log("handle reset clicked");
        dispatch(reset());
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h3>Count: {count}</h3>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={() => handleClick(1)}>Increment</button>
                <button
                    style={{ marginLeft: "6px" }}
                    disabled={!showDecrement}
                    onClick={() => handleClick(-1)}
                >
                    Decrement
                </button>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;
