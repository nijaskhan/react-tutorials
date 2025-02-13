import { useRef, useState } from "react";

// whenever the 'npm install' causes you error, 
    // try this instead `npm install --legacy-peer-deps`
    // try this instead `npm install --force`

function FocusInput({ btnRef }) {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        console.log("input ref: ", inputRef);
        console.log("input ref current: ", inputRef.current);
        console.log("input ref current value: ", inputRef.current.value);

        // inputRef.current.focus();
        btnRef.current.click();
        btnRef.current.innerText = inputRef.current.value;
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
            />
            <button onClick={handleClick} style={{ marginLeft: "7px" }}>Focus Input</button>
        </div>
    );
}

export default FocusInput;