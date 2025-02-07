import React from 'react'
import CustomButton from '../Button';

const Banner = () => {
    function buttonClick() {
        console.log("Button clicked!");
    }

    return (
        <div
            style={{
                backgroundColor: "grey",
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#000000",
            }}
        >
            <h1>Banner Page</h1>
            <CustomButton
                label={"click me to open banner image"}
                handleButtonClick={buttonClick}
            /> {/* `props` defined */}
        </div>
    )
}

export default Banner;
