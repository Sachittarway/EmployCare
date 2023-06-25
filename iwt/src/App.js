import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Landing from './components/Landing';
import AddEmployee from './components/AddEmployee';
import AllEmployees from './components/AllEmployees';
import Search from './components/Search';

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Landing />} />
        <Route path="/addemployee" element = {<AddEmployee />} />
        <Route path="/allemployees" element = {<AllEmployees />} />
        <Route path="/search" element = {<Search />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
