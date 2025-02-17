import React, { useEffect } from 'react'
import CustomButton from '../CustomButton'

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

export const About2 = React.memo(({ userName }) => {
    // useEffect -> called when component is mounted, unmounted, re-rendered
    useEffect(() => {
        // calls when component is mounted
        console.log("About2 component mounted");
    }, []);

    useEffect(() => {
        // calls when component is unmounted
        return () => {
            console.log("About2 component unmounted");
        }
    }, []);

    useEffect(() => {
        // calls when component is re-rendered
        console.log("About2 component re-rendered");
    }, [userName]); // (dependency array) -> if the value of userName changes, the component will re-render

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
                    {
                        userName && (
                            <h2>User Name: {userName}</h2>
                        )
                    }
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
})
