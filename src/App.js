import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CreatePackageTravel from './components/CreatePackageTravel';
import Home from './components/Home';
import PackageTravel from './components/PackageTravel';
import Contact from './components/Contact';
import { Login } from './components/Login';
import Promotions from './components/Promotions';
import Viewpackage from './components/ViewPackageTravel';
import { CardPackageTravel} from './components/CardPackageTravel';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/packages" element={<PackageTravel />} />
            <Route path="/add-package" element={<CreatePackageTravel />} />
            <Route path="/Promotions" element={<Promotions />} />
            <Route path="/PackageTravel/:id" element={<Viewpackage />} />
            <Route path="CardPackageTravel" element={<CardPackageTravel />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>

  );
}
export default App;