"use client" //this is the way to make client component ; by default it server component in next

import {params} from 'next/link'
import { useRouter } from 'next/navigation'


export default function course ({params}){
    const router = useRouter()
    return(
        <div className='text-center'>
            Welcome to {params.coursename}
            <br/>
            <button className='border-2 border-blue-400 rounded-lg mt-5 py-2 px-5 mb-10 hover:bg-blue-300 hover:text-black' onClick={()=>router.back()}>Go Back</button>


         
            {/* Dtata Fetching */}
            <h1>Learning Data fetching</h1>
            <button className='border-2 border-blue-400 rounded-lg mt-5 py-2 px-5 hover:bg-blue-300 hover:text-black' onClick={()=>router.push('/dataFetch')}>See Data Fetching Way</button>
        </div>
    )
}