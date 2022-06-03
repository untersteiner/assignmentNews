import React, { useContext, useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { DataContext } from "../../../context/DataContext";
import Loading from '../Loading';

const Index = () => {

  const {data} = useContext(DataContext); //Consume the data from the context

  const [cat, setCat] = useState([]);

  useEffect(() => {
    var arr = [];

    for (const item in data) {
      arr.push(data[item].category); //Convert object to array to use cheap methods
    }

    setCat(arr.filter((v, i, a) => a.indexOf(v) === i));//Filter the array to get the unique data and save it in the state
    
  }, [data])

  return (
    <>
    <header className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Categories to show</h1>
        </div>
    </header>
    
    <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0 flex flex-wrap">
              {
                cat.length === 0 
                ? 
                  <Loading /> 
                : 
                  cat.map(cat => <CategoryCard key={cat} cat={cat}/>) 
              }
            </div>
        </div>
    </main>
    </>
  )
}

export default Index;