import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { userLogin } from '../../../apiUtils/userApi';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@token'));
        const user = JSON.parse(localStorage.getItem('@entri_user'));

        if (user && token) {
            navigate('/');
            return;
        } else {
            localStorage.removeItem('@token');
            localStorage.removeItem('@entri_user');
            toast.info("session expired, please login again");

            navigate('/authentication/login');
        }
        // eslint-disable-next-line
    }, []);

    const isValid = () => {
        if (email && email?.trim().length > 0 && password && password?.trim().length > 0) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        } else {
            return false;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // trimming the white empty spaces
        email.trim();
        password.trim();
        // checking for validation
        if (isValid()) {
            // make api call here
            const response = await userLogin({ email: email, password: password });
            console.log("response from login: ", response);
            if (response?.success) {
                localStorage.setItem("@token", JSON.stringify(response?.token));
                localStorage.setItem("@entri_user", JSON.stringify(response?.data));
                navigate('/');
            } else {
                toast.error("Email or Password is invalid!");
            }
        } else {
            toast.warning("Please enter a valid email");
        }
    }


    return (
        <section className="vh-100 d-flex justify-content-center">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt='login' />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                <input
                                    type="email"
                                    id="form3Example3"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                />
                            </div>
                            <div data-mdb-input-init className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                <input
                                    type="password"
                                    id="form3Example4"
                                    className="form-control form-control-lg"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                />
                            </div>

                            <div className='d-flex justify-content-center'>
                                <button
                                    type="button"
                                    data-mdb-button-init
                                    data-mdb-ripple-init
                                    className="btn btn-primary btn-lg ps-5 pe-5"
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    className="link-danger">Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;
