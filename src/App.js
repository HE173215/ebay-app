import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import DataProvider from './context/DataContext'; // Import DataProvider

function App() {
    return (
        <DataProvider> {/* Wrap the entire app with DataProvider */}
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/category/:categoryId" element={<ProductPage />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </DataProvider>
    );
}

export default App;