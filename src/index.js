import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './pages/layout';
import Home from './pages/home/home';
import AboutMe from './pages/about_me/about_me';
import ShoppingList from './pages/shopping_list/shopping_list';
import Factorial from './pages/factorial/factorial';
import Fibonacci from './pages/fibonacci/fibonacci';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about_me" element={<AboutMe />} />
          <Route path="shopping_list" element={<ShoppingList />} />
          <Route path="factorial" element={<Factorial />} />
          <Route path="fibonacci" element={<Fibonacci />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
