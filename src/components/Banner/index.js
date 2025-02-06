import React from 'react'
import CustomButton from '../Button';

const Banner = () => {
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
            <CustomButton />
        </div>
    )
}

export default Banner;
