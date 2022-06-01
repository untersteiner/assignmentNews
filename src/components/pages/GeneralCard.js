import React from 'react';
import { Link } from "react-router-dom";

const GeneralCard = ({recent}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-1 my-2">
        <div>
            <img className="h-100 w-100" src={recent.thumbnailUrl} alt="" />
        </div>
        <div className="px-6 py-4">
            <div>
                <p className="mb-3 text-lg">{recent.title}</p>
            </div>
            <div className="flex justify-between mx-1 my-4 shadow">
                <div>
                    <p>{recent.category}</p>
                </div>
                <div>
                    <p>{recent.views}</p>
                </div>
            </div>
            <div className="flex justify-between mx-1 my-2">
                <div><p>{recent.createdAt}</p></div>
                <div>
                    <Link 
                        to={`/new/${recent.id}`}
                        className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GeneralCard;