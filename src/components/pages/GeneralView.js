import React, { useContext, useEffect, useState }  from 'react';
import { DataContext } from "../../context/DataContext";
import { useParams } from "react-router-dom";

const GeneralView = () => {

  const {data} = useContext(DataContext);

  const [search, setSearch] = useState({});

  let params = useParams();

  useEffect(() => {

    for (const item in data) {
        if (data[item].id === params.idNew) {
          setSearch(data[item])
        }
      }

  }, [data])

  return (
    <>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="py-2">
            <h1 className="text-3xl font-bold">{search.title}</h1>
          </div>

          <div className="flex justify-around py-1 sm:px-6 lg:px-8">
              <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                {new Date(search.createdAt).toLocaleDateString("en-US")}
              </div>
              <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {search.views}
              </div>
              <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                {search.category?.charAt(0).toUpperCase() + search.category?.slice(1)}
              </div>
          </div>

          <div className='hero container max-w-screen-lg mx-auto pb-10 flex justify-center'>
              <img className="w-full" src={search.imageUrl} alt="" />
          </div>

          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold">{search.subtitle}</h1>
          </div>

          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-lg">{search.body}</p>
          </div>
        </div>
    </>
  )
}

export default GeneralView