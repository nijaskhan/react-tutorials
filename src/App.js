import React from 'react'
import './App.css';
import Banner from './components/Banner';
import { About, About2 } from './components/About';

// shorthand for creating component: `rafce`

function App() {
  return (
    <> {/* -> React Fragments */}
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
  )
};

export default App;