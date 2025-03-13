import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserTable from '../UserTable';

const AxiosData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // will work on mounting phase
        // setting loading state to true
        setLoading(true);

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log("response: ", response?.data);
                setData(response?.data);
            })
            .catch((err) => {
                console.log("error: ", err);
            })
            .finally(() => {
                // setting loading state to false
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px 0"
            }}>
                <h1>Axios Data</h1>
            </div>
            {
                data?.length > 0 ? (
                    <UserTable userData={data} />
                ) : (
                    loading ? (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "10px 0"
                            }}
                        >
                            loading...
                        </div>
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "10px 0"
                            }}
                        >
                            No data found!
                        </div>
                    )
                )
            }
        </div>
    )
}

export default AxiosData;
