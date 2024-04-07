import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Card } from '../../../props_basics/src/components/Card'
import { CardOne } from './components/Card'

//Data - object - 5 cards 


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="bg-red-600 mb-10" >This my React App.</h1>
     <CardOne username="Shaan" />
     <CardOne username="Vardman" />
    </>
  )
}

export default App
