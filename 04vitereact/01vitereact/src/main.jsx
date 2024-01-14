import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



// function myApp(){
//   return(
//     <h1>Learning how react converts components(functions,element) to tree structure according to its rules</h1>
//   )
// }


// Tree structure used by react is as follows 


// we cannot directly convert into this structure because name like type , props , children will according to the 
//  syntax made by react developer

// const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }

//    but we can create direct object which will be converted by the react 

// const anotherElement=(
//   <a href="https://www.google.com">Press to visit the google page</a>
// )



//     Rules followed by the React 



//     variables are always added at the last ...............in the below rules




const varEx="I am a variable exaple"

const reactElement=React.createElement(
  'a',              //here we have to specify the type of the parameter
  {href:"https://www.google.com"},        // here you have provide the link 
  'Click meeeeeeeee to visit google page  ',         // here you have to provide the message
  varEx

)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // myApp()
    // anotherElement
    // reactElement

    // <App/>

    reactElement


  ,
)
