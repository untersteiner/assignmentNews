import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Categories from './components/pages/categories/Index';
import Tops from './components/pages/tops/Index';
import Recents from './components/pages/recents/Index';
import App from './App';
import GeneralView from './components/pages/GeneralView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="categories" element={<Categories />} />
        <Route path="tops" element={<Tops />} />
        <Route path="recents" element={<Recents />} />
        <Route path="new/:idNew" element={<GeneralView />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);