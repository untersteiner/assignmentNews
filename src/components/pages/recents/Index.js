import React, { useContext, useEffect, useState } from 'react';
import GeneralCard from '../GeneralCard';
import { DataContext } from "../../../context/DataContext";

const Index = () => {

  const {data} = useContext(DataContext);
  
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    var arr = [];

    for (const item in data) {
        arr.push(data[item]);
      }

    arr.sort((a,b) => {
      if(Date.parse(a.createdAt) < Date.parse(b.createdAt) ) return 1;
      if(Date.parse(a.createdAt)  > Date.parse(b.createdAt)) return -1;
      return 0;
    });

    setRecents(arr);
  }, [data])
     
  return (
    <>
    <main>
        <div className="max-w-7xl mx-auto py-1 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0  flex flex-wrap">
              {
                recents.length === 0 
                ? 
                  "Cargando..." 
                : 
                recents.map(recent => <GeneralCard key={recent.id} recent={recent}/>)
              }
            </div>
        </div>
    </main>
    </>
  )
}

export default Index;