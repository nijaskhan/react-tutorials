import React from 'react'

const LoginPage = () => {
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
                                <label className="form-label" for="form3Example3">Email address</label>
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                            </div>
                            <div data-mdb-input-init className="form-outline mb-3">
                                <label className="form-label" for="form3Example4">Password</label>
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                            </div>

                            <div className='d-flex justify-content-center'>
                                <button
                                    type="button"
                                    data-mdb-button-init
                                    data-mdb-ripple-init
                                    className="btn btn-primary btn-lg ps-5 pe-5"
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
