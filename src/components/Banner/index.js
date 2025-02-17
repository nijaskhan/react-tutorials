import React, { useEffect, useState } from 'react'
import CustomButton from '../CustomButton';
import { About2 } from '../About';

const Banner = () => {
    const [showAboutComponent, setShowAboutComponent] = useState(false);
    const [userName, setUserName] = useState("");

    // mounting phase
    useEffect(() => {
        console.log("Banner component mounted");
    }, []) // -> dependency array

    function buttonClick() {
        console.log("Button clicked!");
        setShowAboutComponent(!showAboutComponent);
    }

    function handleUserNameChange() {
        setUserName("nijas");
    }

    return (
        <>
            <div
                style={{
                    backgroundColor: "grey",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#000000",
                    margin: "10px 0"
                }}
            >
                <h1>Banner Page</h1>
                <CustomButton
                    label={"click me to open banner image"}
                    handleButtonClick={buttonClick}
                /> {/* `props` defined */}

                <div style={{
                    backgroundColor: "grey",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#000000",
                    margin: "10px 0"
                }}>
                    <CustomButton
                        label={"Change User Name"}
                        handleButtonClick={handleUserNameChange}
                    />
                </div>

            </div>
            {
                showAboutComponent && (
                    <About2 userName={userName} />
                )
            }
        </>
    )
}

export default Banner;
