import React, { useContext, useEffect, useState } from 'react';
import GeneralCard from '../GeneralCard';
import { DataContext } from "../../../context/DataContext";
import Loading from '../Loading';

const Index = () => {

  const {data} = useContext(DataContext);//Consume the data from the context

  const [tops, setTops] = useState([]);

  useEffect(() => {
    var arr = [];

    for (const item in data) {
        arr.push(data[item]); //Convert object to array to use cheap methods
      }

    arr.sort((a,b) => {
      if(a.views < b.views) return 1;
      if(a.views  > b.views) return -1;
      return 0;
    }); //Sort data using views

    setTops(arr);
  }, [data])

  return (
    <>
    <main>
        <div className="max-w-7xl mx-auto py-2 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0 flex flex-wrap">
            {
                tops.length === 0 
                ? 
                  <Loading /> 
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