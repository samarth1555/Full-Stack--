import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (

    <div>

     
      <a href="https://reactjs.org">
        Learn React
      </a>

   
      <h1>count: {count}</h1>

  
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

    </div>

  );

}

export default App;