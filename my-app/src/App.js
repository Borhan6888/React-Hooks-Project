import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import { UserProvider } from './Components/UserContex/UserContext';
import Delete from './Components/Delete/Delete';
import Read from './Components/Read/Read';
import Create from './Components/Create/Create';
import Edit from './Components/Edit/Edit';

function App() {
  return (
    <div className="App">
    <UserProvider>
      <BrowserRouter> 
        <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/read/:id" element={<Read />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  </UserProvider>
    </div>
  );
}

export default App;
