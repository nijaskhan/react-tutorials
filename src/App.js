import React from 'react'

// shorthand for creating component: `rafce`

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>   {/* -> React Fragments */}
        <h1> Hello, World!</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>   {/* -> React Fragments */}
        <h1> Hello, World2!</h1>
      </div>
    </>
  )
};

export default App;