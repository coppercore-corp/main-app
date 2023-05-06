import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components for each page
import Home from './pages/home';
import Contacts from './pages/contacts';
import Products from './pages/products';
import Layout from "./pages/layout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>            
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/products" element={<Products />} />
                </Route>
            </Routes>
      </Router>
    );
  }
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(<App />);
