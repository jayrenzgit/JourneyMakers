import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LoadingSpinner } from './components/LoadingSpinner';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import ClientDetail from './pages/ClientDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <React.Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/clients/:id" element={<ClientDetail />} />
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;