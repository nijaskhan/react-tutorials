import React from 'react'
import './App.css';
import Banner from './components/Banner';
import { About, About2 } from './components/About';
import CheckAuthorization from './components/CheckAuthorization';
import Greet from './components/Greet';
import Navbar from './components/Navbar';

// imported bootsrap from node_modules;
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

// shorthand for creating component: `rafce`

function App() {

  const user = "Nijas";

  // localStorage.setItem("user", JSON.stringify(user));
  // const userName = JSON.parse(localStorage.getItem("user"));
  // console.log("username: ", userName);

  return (
    <> {/* -> React Fragments */}
      {
        user !== null ? (
          <>
            {/* Navbar imported */}
            <Navbar />

            <div
              style={{ margin: "20px 0" }}
            >
              <Banner />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16
              }}
            >
              <About />
              <About2 />
            </div>
            {/* Greet component */}
            <div
              className='d-flex justify-content-center mt-4'
            // style={{ 
            //   marginTop: '2rem',
            //   display: 'flex',
            //   justifyContent: 'center'
            // }}
            >
              <Greet user={user} />
            </div>
          </>
        ) : <CheckAuthorization username={user} />
      }
    </>
  )
};

export default App;