import { useState } from 'react';
import './App.css';
import Mealinfo from './Component/Mealinfo';
import Mainpage from './Component/Mainpage';
import { Routes, Route } from 'react-router-dom';



function App() {
  

  return (
    
      <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid' element={<Mealinfo/>}/>
      </Routes>
       
    
  );
}

export default App;
