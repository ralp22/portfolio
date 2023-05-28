import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom'
import React from 'react';
import Projects from './Pages/Projects';

function App() {
  return (
    <div class="app">
          <Header />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route></Route>
          </Routes>
    </div>
  );
}

export default App;
