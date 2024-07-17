'use client';
import { useState } from "react";
import React from 'react'

export default function NewschoolFormUI  () {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const submitData = async () => {
        let response = await fetch('api/schools',{
          method:"POST",
          body:JSON.stringify({
            title:title,
            body:body,            
          }),
          headers:{
            'Content-type': 'application/json'
          }
        })
        response = await response.json()  
        alert(JSON.stringify(response))
    }
    return (
        <div className="p-4 sm:p-8">
            <input type="text" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Enter Title"
                className="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500 text-black"
            />


            <input type="text" 
                value={body}
                onChange={(e)=>setBody(e.target.value)}                
                placeholder="Enter Body"
                className="w-full mt-4 resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500 text-black"
            />
            
            <button 
                className="mt-8 w-full rounded-lg borde border-blue-950 bg-blue-950 p-3 text-center font-medium text-white outline-none transition focus:ring hover:border-blue-900 hover:bg-blue-900 hover:text-white"
                onClick={submitData}
            >
                    Save
            </button>
        </div>
    )
}

