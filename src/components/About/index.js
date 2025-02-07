import React from 'react'
import CustomButton from '../Button'

export const About = () => {
    return (
        <>
            <div
                className='color'
                style={{
                    display: "flex",
                    justifyContent: "center",
                    textDecoration: "underline"
                }}
            >
                <h1>About Page</h1>
            </div>
        </>
    )
}

export const About2 = () => {

    const handleClick = () => {
        console.log('Navigate to About us page');
    }

    return (
        <>
            <div
                className='color'
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "underline",
                    padding: "10px"
                }}
            >
                <div>
                    <h1>About Page 2</h1>
                </div>
                <div>
                    <CustomButton
                        label={"click here to navigate to About us page"}
                        handleButtonClick={handleClick}
                    />
                </div>
            </div>
        </>
    )
}
