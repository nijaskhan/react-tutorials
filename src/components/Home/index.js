import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";

const Home = () => {
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log("userId", userId);
        navigate(`/user/${userId}`);
    }

    return (
        <div>
            <h1>Search User</h1>
            <div
                style={{
                    display: 'flex',
                    gap: '10px'
                }}
            >
                <input
                    type="number"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
                <CustomButton
                    label="search user by Id"
                    handleButtonClick={handleSearch}
                />
            </div>
        </div>
    );
};
export default Home;