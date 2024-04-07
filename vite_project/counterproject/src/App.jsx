import { useState } from 'react'

import './App.css'

function App() {

  //using hook first time
  let [counter,setCounter] =useState(15)


  // let counter=10;

  let addValue = () => {
    console.log("My value" , counter);
    counter=counter+1;
    setCounter(counter);
  } 


  return (
    <div>
      <h1>This is my conter project {counter}</h1>
      <h1>Count : {counter}</h1>
      <button
      onClick={addValue}
      >Click to add {counter}</button>
      <br />
      <br />
      <button>Click to sub {counter} </button>
    </div>
  )
}

export default App
