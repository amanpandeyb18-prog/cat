import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';
import Landing from './pages/Landing';
import Letter from './pages/Letter';
import Valentine from './pages/Valentine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/valentine" element={<Valentine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;