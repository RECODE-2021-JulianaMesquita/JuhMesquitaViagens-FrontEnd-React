import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ListPackageTravel from './components/ListPackageTravel';
import CreatePackageTravel from './components/CreatePackageTravel';
import CardPackageTravel from './components/CardPackageTravel';

function App() {
  return (
    <div>
      <Router>        
          <Header />  
          <div className="container">     
          <Routes>

            <Route path="/" element={<CardPackageTravel />} />
            <Route path="/pacotes" element={ListPackageTravel}  />
            <Route path="/adicionar-pacote" element={CreatePackageTravel} />


          </Routes>
          <Footer />
        </div>
      </Router>
    </div>

  );
}
export default App;