import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "bodhan",
    age: 22
  }
  let newArr=[1,2,3];

  return (
    <>
     <h1 className= 'bg-green-400 text-black p-5 rounded-2xl mb-4' >Tailwind Test</h1>
    <Card username='bodhan' btnText = "clickme" />
    <Card username= 'dhakal' btnText= "visit me" />
    <Card />

    </>
  )
}

export default App
