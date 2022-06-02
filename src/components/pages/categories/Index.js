import React, { useContext, useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { DataContext } from "../../../context/DataContext";

const Index = () => {

  const {data} = useContext(DataContext);

  const [cat, setCat] = useState([]);

  useEffect(() => {
    var arr = [];

    for (const item in data) {
      arr.push(data[item].category);
    }

    setCat(arr.filter((v, i, a) => a.indexOf(v) === i));
    
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
                  "Cargando..." 
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