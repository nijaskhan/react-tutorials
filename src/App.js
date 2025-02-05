import React from 'react'

// shorthand for creating component: `rafce`

function App() {
  return (
    <> {/* -> React Fragments */}
      <div style={{ display: "flex", justifyContent: "center" }}>   
        <h1> Hello, World!</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1> Hello, World2!</h1>
      </div>
    </>
  )
};

export default App;