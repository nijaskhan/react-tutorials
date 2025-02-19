import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <header
                style={{
                    backgroundColor: "lightgray",
                    padding: "10px",
                    marginBottom: "10px",
                }}
            >
                <nav>
                    <ul
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                            listStyle: "none",
                        }}
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/counter">Counter</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                {/* childs will render here */}
                <Outlet />
            </main>

            <footer 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "lightgray",
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                <p>@2025 My React App</p>
            </footer>
        </div>
    )
}

export default Layout
