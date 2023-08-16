
import React, { useState, createContext } from 'react';

//useSelector == useContext, useDispatch == to do smth g

import { Routes, Route } from "react-router-dom";

import Header from './components/header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import { increment, decrement } from './redux/slices/filterSlice';
import './scss/app.scss';

export const SearchContext = createContext('');

function App() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      
      <SearchContext.Provider value={{ searchValue, setSearchValue}}>
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider> 
    </div>
  );
}

export default App;
