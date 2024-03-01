// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import UserTable from './components/UserTable';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegistrationForm/>} />
        <Route path="/user-table" element={<UserTable/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
