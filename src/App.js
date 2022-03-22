import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CreatePackageTravel from './components/CreatePackageTravel';
import Home from './components/Home';
import PackageTravel from './components/PackageTravel';
import Contact from './components/Contact';
import Login from './components/Login';
import Promotions from './components/Promotions';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/entrar" element={<Login />} />
            <Route path="/pacotes" element={<PackageTravel />} />
            <Route path="/adicionar-pacote" element={<CreatePackageTravel />} />
            <Route path="/promocoes" element={<Promotions />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>

  );
}
export default App;