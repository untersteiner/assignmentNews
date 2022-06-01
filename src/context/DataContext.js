import React,{ createContext, useState, useEffect } from 'react';
import getData from '../services/newsSevice';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        setData(await getData())
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <DataContext.Provider value={{data}}>
            { children }
        </DataContext.Provider>
    )
}