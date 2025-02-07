import React from 'react'

const CheckAuthorization = ({ username }) => {
    return (
        <div
            style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'grey',
                color: 'white',
            }}
        >
            Not Authorized {username}!
        </div>
    )
}

export default CheckAuthorization
