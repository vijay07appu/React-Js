import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/card'

function App() {


  let myObj={
    username:"vijay",
    age:22
  }
  

  return (
   <>
  
    {/* <Card/> */}
    {/* <Card channel="Chai aur code" someObj={myObj}/>   // here we are sending property channel and object to card */}
    {/* <Card/>      both cards are same even name and content , so there is no use in using it again ... */}
     {/* so we are sending property to card */}

     <Card username="vijay jD" btnText="vijay profile"/>
     <Card username="jaideep jD" btnText="Jaideep profile"/>
   
   </>
  )
}

export default App
