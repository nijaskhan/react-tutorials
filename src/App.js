import React, { useRef, useState } from 'react'
import './App.css';
import Banner from './components/Banner';
import { About, About2 } from './components/About';
import CheckAuthorization from './components/CheckAuthorization';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';

// shorthand for creating component: `rafce`

function App() {
  const btnRef = useRef(null);
  const [username, setUsername] = useState("");

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

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px 0"
              }}
            >
              <h1>Counter</h1>
              <Counter />
            </div>

            {/* Input field value using useState */}
            <div style={{ marginTop: "30px" }}>
              <input
                type="text"
                placeholder="Enter text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p>You typed: {username}</p>
            </div>

            <div style={{ marginTop: "25px", marginBottom: "25px", display: "flex", justifyContent: "center" }}>
              <button ref={btnRef} onClick={() => alert("I am ref button")}>I am just a Button</button>
            </div>

            <div style={{ marginTop: "25px", marginBottom: "25px", display: "flex", justifyContent: "center" }}>
              <FocusInput btnRef={btnRef} />
            </div>

          </>
        ) : <CheckAuthorization username={user} />
      }
    </>
  )
};

export default App;