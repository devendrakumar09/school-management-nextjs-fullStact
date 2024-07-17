import NewschoolFormUI from '@/app/_component/school/NewschoolFormUI'
import Link from 'next/link'
import React from 'react'

const NewSchool = () => {
    return (
        <section className=" py-12 pt-1 text-gray-800 sm:py-8">
            <div className="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row lg:px-32">
                <div className="max-w-2xl px-4 lg:pr-24">
                    <Link href={'/schools'} className="mb-2 text-blue-600 ">Go to the School Page</Link>
                    <h3 className="mb-5 text-3xl font-semibold">Get Custom Pricing</h3>
                    <p className="mb-16 text-lg text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, corrupti asperiores voluptatum labore eligendi quisquam. Id quae, laboriosam saepe facere ea asperiores!</p>
                    
        
                    <div className="mb-5 flex font-medium">
                        <div className="mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-blue-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                            </svg>
                        </div>
                        <div className="">
                            <p className="mb-2">Monthly 400k Image Downloads</p>
                            <span className="font-normal text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum porro molestias quaerat maxime modi.</span>
                        </div>
                    </div>
                    <div className="mb-5 flex font-medium">
                        <div className="mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-blue-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </div>
                        <div className="">
                            <p className="mb-2">Stay Syned to the Database</p>
                            <span className="font-normal text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum porro molestias quaerat maxime modi.</span>
                        </div>
                    </div>
                   
                </div>
                <div className="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0 bg-blue-600 text-white">
                    <div className="relative border-b border-gray-300 p-4 py-8 sm:px-8">
                        <h3 className="mb-1 inline-block text-3xl font-medium"><span className="mr-4">Create School</span></h3>
                        <p className="">Contact us for custom use cases</p>
                    </div>
                    <NewschoolFormUI />
                </div>
            </div>
        </section>


    )
}

export default NewSchool