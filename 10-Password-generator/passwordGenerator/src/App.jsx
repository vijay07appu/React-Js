import { useCallback, useEffect, useState,useRef } from 'react'

import './App.css'

function App() {


  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [color,setColor]=useState("red")


  // useRef hook

  const passwordRef = useRef(null)


  const fn = () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    console.log(str)
    if (numberAllowed) {
      console.log("numbers are added  ",str)
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "@#$%^&*"
      console.log("special characters are added  ",str)

    }


    for (let i = 1; i <= length; i++) {
      let random_index = Math.floor((Math.random() * str.length+1))
      pass = pass+str.charAt(random_index)

    }
    setPassword(pass)
  }


  const copyPasswordToClipboard= useCallback(()=>{

    
    passwordRef.current?.select();                      // this is to highlight the copied values ..
    passwordRef.current?.setSelectionRange(0,100)       // this is to copy only particular range of values ..
    setColor("green")
    window.navigator.clipboard.writeText(password)
  },[password])



  const passwordGenerator = useCallback(fn, [length, numberAllowed, characterAllowed, setPassword])


  useEffect(()=>{passwordGenerator()},[length,numberAllowed,characterAllowed,passwordGenerator])





  return (
    <>


      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password}
            className='outline-now w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef} />


          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          style={{backgroundColor:color}}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
            }} />
            <label htmlFor='numberInput'>Numbers</label>


          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
            }}/>

            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>

      </div>




    </>
  )
}

export default App
