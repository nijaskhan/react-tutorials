import React, { useRef, useState } from 'react'
import './App.css';
import Banner from './components/Banner';
import AxiosData from './components/AxiosData';
import CustomButton from './components/CustomButton';
// shorthand for creating component: `rafce`

// useEffect - react hook


function App() {
  const [showAxiosData, setShowAxiosData] = useState(false);

  function handleShowAxiosData() {
    setShowAxiosData(!showAxiosData);
  }

  return (
    <> {/* -> React Fragments */}
      <h1>Connecting to an API in React - useEffect, fetch, & Axios</h1>
      <Banner />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0"
        }}
      >
        <CustomButton
          label={"Show Axios Data"}
          handleButtonClick={handleShowAxiosData}
        />
      </div>

      {
        showAxiosData && (
          <AxiosData />
        )
      }
    </>
  )
};

export default App;