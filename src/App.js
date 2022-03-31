import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import AddUser from './components/pages/AddUser';
import EditUser from './components/pages/EditUser';
import ViewUser from './components/pages/ViewUser';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/viewUser/:id" element={<ViewUser />} />
      </Routes>
    </div>
  );
};

export default App;
