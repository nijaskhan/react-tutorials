import React from 'react'
import './App.css';
import Banner from './components/Banner';
import { About, About2 } from './components/About';
import CheckAuthorization from './components/CheckAuthorization';

// shorthand for creating component: `rafce`

function App() {

  const user = "nijas";

  return (
    <> {/* -> React Fragments */}
      {
        user === "nijas" ? (
          <>
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
          </>
        ) : <CheckAuthorization username={user} />
      }
    </>
  )
};

export default App;