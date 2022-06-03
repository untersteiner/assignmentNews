import React from 'react';
import { Link } from "react-router-dom";

const GeneralCard = ({recent}) => {
  return (
    <div className="max-w-sm w-80 rounded overflow-hidden shadow-lg mx-1 my-2">
        <div>
            <img className="object-cover h-48 w-96" src={recent.thumbnailUrl} alt="thumbnail" />
        </div>
        <div className="px-6 py-4 ">
            <div className='h-20'>
                <p className="mb-3 text-base font-bold">{recent.title}</p>
            </div>
            <div className="flex justify-between mx-1 my-1">
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                    <p>{recent.category.charAt(0).toUpperCase() + recent.category.slice(1)}</p> {/*Trick to capitalize the first letter*/}
                </div>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <p>{recent.views}</p>
                </div>
            </div>
            <div className="py-3">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="flex justify-between mx-1 my-2 ">
                <div  className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p>{new Date(recent.createdAt).toLocaleDateString("en-US")}</p> {/*Takes the string, converts it to a date and formats it*/}
                </div>
                <div>
                    <Link 
                        to={`/new/${recent.id}`}
                        className="py-2 px-3 text-sm font-medium text-center text-white bg-purple rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GeneralCard;