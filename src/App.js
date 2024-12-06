// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './Components/LandingPage/Header';
import Content from './Components/LandingPage/Content';
import PlanningPage from './Components/PlanningPage/PlanningPage';
import Footer from './Components/LandingPage/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/plan" element={<PlanningPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;