import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './About.jsx'
import Contact from './Components/Contact.jsx'
import { Route } from 'react-router-dom'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'


// now we need to create router


// path in the below means as follows ----
//  "/"  means first go inside "/"  then "" means nothing "about" means inside "/" go to about ....

// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


// Another way to create router , most prefered one 

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route
      
      
      path='github'
       element={<Github/>}/>
    </Route>
  )
)


// "user/:userid "    it is a important feature , this is how facebook instagram works 
// every user have same layout ui , but content change based on this .....   ":userid" 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>       
  </React.StrictMode>,
)
