import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter,setCounter]=useState(15)

  const addValue=()=>{
    
   // if block is used to make counter not more than 20
    if(counter>=20)
    {
      console.log("I am inside if-block")
      setCounter(20)
    }
    else{
      console.log("I am outside if-block")
      counter=counter+1
      setCounter(counter)

    }
    console.log("value is added ",counter)
    

  }

  const removeValue=()=>{

    // if block is used to make counter not less than 0
    if(counter<=0)
    {
      console.log("I am inside if-block")
      setCounter(0)
    }
    else{
      console.log("I am outside if-block")
      counter=counter-1
      setCounter(counter)

    }
    console.log("value is removed ",counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h3>Counter value is {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
