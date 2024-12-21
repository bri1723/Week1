import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './Context';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';

function App() {
  const { token } = useContext(AuthContext); 

  return (
    <Routes>
      <Route path="/signup" element={token ? <Navigate to="/" /> : <Signup />} />

      <Route path="/signin" element={token ? <Navigate to="/" /> : <Signin />} />

      <Route path="/" element={token ? <Home /> : <Navigate to="/signin" />} />

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;