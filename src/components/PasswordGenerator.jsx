import React from 'react'
import { useState,useCallback } from 'react'


function PasswordGenerator() {
    const[length,setLength]=useState(8)
    const[numberAllowed,setNumberAllowed]=useState(false);
    const[charAllowed,setCharAllowed]=useState(false);
    const[password,setpassword]=useState("");    
    const PasswordGenerator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+-={}[]|\/'';:.,``~"
    for(let i=0;i<=array.length;i++){
        let char=Math.floor(Math.random()*str.length+1)
        pass=str.charAt(char)
    }  
    setpassword(pass)
 },[length,numberAllowed,charAllowed,setpassword])
  return (<>
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center my-3' >PasswordGenerator</h1>
<div className='className="flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text" value={password} className='outline-none w-full py-1 px-3'
    placeholder='password' readOnly/>
   <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

</div>
</div>
  </>
    
  )
}

export default PasswordGenerator