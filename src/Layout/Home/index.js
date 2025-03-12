const Home = () => {
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
                        <tr>
                            <td>John Doe</td>
                            <td>johndoe</td>
                            <td>johndoe@example.com</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>janesmith</td>
                            <td>janesmith@example.com</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Bob Johnson</td>
                            <td>bobjohnson</td>
                            <td>bobjohnson@example.com</td>
                            <td>35</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Home;