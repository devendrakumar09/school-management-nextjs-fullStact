import Image from 'next/image'
import React from 'react'

const SchoolUi = ({data}) => {
    return (
        <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 shadow-sm hover:shadow hover:bg-slate-100">
            <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                {/* <Image src={'/1.jpg'} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"} width={100}  height={100} /> */}

                <Image src={'/1.jpg'} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" width={100}  height={100}></Image>

                
            </a>

            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-gray-800">
                    <span className="transition duration-100 hover:text-rose-500 active:text-rose-600">{data.name}</span>
                </h2>
                <p className="text-gray-500">{data.address}</p>
                <table className="text-gray-500">
                    <tr>
                        <td><strong>City : </strong> {data.city}</td>
                        <td><strong>State : </strong> {data.state}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><strong>Contact : </strong>{data.contact}</td>                        
                    </tr>
                    <tr>
                        <td colSpan={2}><strong>Emmail : </strong>{data.email}</td>                        
                    </tr>
                </table>

                {/* <div>
                    <a href="#" className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">Read more</a>
                </div> */}
            </div>
        </div>
    )
}

export default SchoolUi