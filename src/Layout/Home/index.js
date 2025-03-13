import { useEffect, useState } from "react";
import { getUsers } from "../../apiUtils/userApi";
import { toast } from "react-toastify";

const Home = () => {
    const [users, setUsers] = useState([]);

    async function getUsersApi() {
        try {
            const usersData = await getUsers();
            // console.log("usersData: ", usersData);
            setUsers(usersData?.data);
        } catch (err) {
            toast.error(err?.message ?? "user fetching failed!");
        }
    }

    useEffect(() => {
        getUsersApi();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container">
            <div className="d-flex justify-content-center mb-3 mt-2">
                <h1>User List</h1>
            </div>
            <div className="d-flex justify-content-center">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users
                                && users?.length > 0
                                ? users.map((user) => (
                                    <tr>
                                        <td>{user?.name}</td>
                                        <td>{user?.username}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.age}</td>
                                    </tr>
                                )) : <></>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Home;