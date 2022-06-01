import 'tailwindcss/tailwind.css';
import { Outlet} from "react-router-dom";
import Nav from './components/Nav';
import React from 'react';
import {DataProvider} from './context/DataContext';

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Nav />
        <Outlet />
      </DataProvider>
    </div>
  );
  
}

export default App;
