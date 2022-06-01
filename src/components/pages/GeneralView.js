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
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">{search.title}</h1>
        </div>

        <div className="flex justify-around  mx-1 my-4">
            <div>{search.createdAt}</div>
            <div>{search.views}</div>
            <div>{search.category}</div>
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
    </>
  )
}

export default GeneralView