import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VisualizationPage from "./pages/VisualizationPage";

export default function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<VisualizationPage/>} />
        </Routes>
    </Router>
    </>
  );
}