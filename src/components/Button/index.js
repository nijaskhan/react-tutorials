import React from 'react'

const CustomButton = () => {
    return (
        <button style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            outline: 'none',
            border: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
        }}>
            Click Me to open an Alert!
        </button>
    )
}

export default CustomButton;
