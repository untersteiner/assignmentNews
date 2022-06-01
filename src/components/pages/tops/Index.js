import React, { useContext, useEffect, useState } from 'react';
import GeneralCard from '../GeneralCard';
import { DataContext } from "../../../context/DataContext";

const Index = () => {

  const {data} = useContext(DataContext);

  const [tops, setTops] = useState([]);

  useEffect(() => {
    var arr = [];

    for (const item in data) {
        arr.push(data[item]);
      }

    arr.sort((a,b) => {

      if(a.views < b.views) return 1;

      if(a.views  > b.views) return -1;

      return 0;
    });

    setTops(arr);
    
  }, [data])

  return (
    <>
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Top news</h1>
        </div>
    </header>
    
    <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0 flex flex-wrap">
            {
                tops.length === 0 
                ? 
                  "cargando" 
                : 
                tops.map(recent => <GeneralCard key={recent.id} recent={recent}/>)
              }
            </div>
        </div>
    </main>
    </>
  )
}

export default Index;