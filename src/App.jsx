import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './Pages/Navbar'; // Import the Navbar component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Add the Navbar here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* You can add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
