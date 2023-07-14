import React, { lazy, Suspense } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components for each page
const LazyHome = lazy(() => import('./pages/home'));
const LazyContacts = lazy(() => import('./pages/contacts'));
const LazyProducts = lazy(() => import('./pages/products'));
import Layout from "./pages/layout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Suspense fallback={<div>Loading Home...</div>}><LazyHome /></Suspense>} />
                    <Route path="/contacts" element={<Suspense fallback={<div>Loading Contacts...</div>}><LazyContacts /></Suspense>} />
                    <Route path="/products" element={<Suspense fallback={<div>Loading Products...</div>}><LazyProducts /></Suspense>} />
                </Route>
            </Routes>
      </Router>
    );
  }
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(<App />);
