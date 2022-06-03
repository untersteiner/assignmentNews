import React, { useContext, useEffect, useState } from 'react';
import GeneralCard from '../GeneralCard';
import { DataContext } from '../../../context/DataContext';
import Loading from '../Loading';

const Index = () => {

  const {data} = useContext(DataContext); //Consume the data from the context
  
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    var arr = [];

    for (const item in data) {
        arr.push(data[item]);//Convert object to array to use cheap methods
      }

    arr.sort((a,b) => {
      if(Date.parse(a.createdAt) < Date.parse(b.createdAt) ) return 1;
      if(Date.parse(a.createdAt)  > Date.parse(b.createdAt)) return -1;
      return 0;
    }); //Sort data using dates, before passed from string to date

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
                  <Loading />
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