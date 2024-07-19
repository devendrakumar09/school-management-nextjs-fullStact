'use client';
  
import { useState } from "react";
import React from 'react'


export default function NewSchool () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [contact, setContact] = useState('');
    const [image, setImage] = useState();

    const submitData = async () => {
        // console.log(name+email+address+city+state+contact);
        
        
        let response = await fetch('http://localhost:3000/api/schools',{
          method:"POST",
          body:JSON.stringify({
            name:name,
            email:email,
            address:address,           
            city:city, 
            state:state, 
            contact:contact, 
            image:image, 
          }),
          headers:{
            'Content-type': 'application/json'
          }
        })
        response = await response.json()  
        alert(JSON.stringify(response))

        

        setName('');
        setEmail('');
        setAddress('');
        setCity('');
        setState('');
        setContact('');
    }
    

    return (
         <div className="flex items-center justify-center lg:p-12 p-4 lg:pt-0">
            <div className="mx-auto w-full max-w-[850px] lg:shadow lg:p-10">
                
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                                School Name
                            </label>
                            <input 
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                                id="school-name" 
                                type="text" 
                                placeholder="School Name..." 
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                                {/* <p className="text-red text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                                Email
                            </label>
                            <input 
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                                id="grid-last-name" 
                                type="text" 
                                placeholder="Email..." 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                                Full Address
                            </label>
                            
                            <textarea 
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" 
                                id="grid-password" 
                                type="password" 
                                placeholder="Full Address" 
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                            >
                            </textarea>                           
                        </div>
                    </div>

                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                                City
                            </label>
                            <input 
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                                id="grid-city" 
                                type="text" 
                                placeholder="City..."          
                                value={city}
                                onChange={(e)=>setCity(e.target.value)}               
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                                State
                            </label>                    
                            <input 
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-4" 
                                id="grid-city" 
                                type="text" 
                                placeholder="State..." 
                                value={state}
                                onChange={(e)=>setState(e.target.value)}
                            />                                        
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                                Contact
                            </label>
                            <input 
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-4" 
                                id="grid-zip" 
                                type="text" 
                                placeholder="xxxxx xxxxx" 
                                value={contact}
                                onChange={(e)=>setContact(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                                image
                            </label>
                            <input 
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-1"                                 
                                type="file" 
                                name="image"
                                value={image}
                                onChange={(e)=>setImage(e.target.files?.[0])}
                            />

                        </div>                    
                    </div>

                    <button 
                        className="w-full rounded-lg borde border-blue-950 bg-blue-950 p-3 text-center font-medium text-white outline-none transition focus:ring hover:border-blue-900 hover:bg-blue-900 hover:text-white"
                        // onClick={submitData}
                        type="submit"
                        onClick={submitData}
                    >
                        Save
                    </button>
                
            </div>
        </div>
    )
}
 