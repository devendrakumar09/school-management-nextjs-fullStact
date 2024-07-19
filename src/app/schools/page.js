'use client';
import React, { useEffect, useState } from 'react'
import SchoolUi from '../_component/school/SchoolUi'
 
 
export default function Schools (){
  const [schoolData,setSchoolData] = useState([]);
  async function getSchools(){
    const response = await fetch('api/schools');
    const data = await response.json();
    return data
  }
  useEffect(()=>{
    getSchools().then((data) => {
      setSchoolData(data)
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  },[]);

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">

        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Schools</h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Education is the foundation of all we do in life. It shapes who we are and what we aspire to be. - <strong>Julie Payette</strong></p>
          
          
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16 lg:px-20">      
          {schoolData.map((school) => 
            <SchoolUi data = {school} key={school.id}/> 
          )}
        </div>
      </div>
    </section>
  )
}
