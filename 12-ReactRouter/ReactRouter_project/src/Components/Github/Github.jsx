import React, { useEffect, useState } from 'react'

function Github() {


    const [data,setData]=useState([])


    useEffect(()=>{

        fetch('https://api.github.com/users/vijay07appu')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })

    },[])
    return (
        <>
        <div className='flex justify-center items-center'>
            <img className='rounded-full' src={data.avatar_url} alt='Git picture' width={300}/>
           <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
           GitHub Bio :  {data.bio}
           </div>
        
        </div>
        </>
        
    )
}

export default Github


export const  githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/vijay07appu')
    return response.json()

}
