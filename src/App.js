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
        <div className="container">
          <Header />  
          <ListPackageTravel />        
          <Routes>
            <Route component={<ListPackageTravel />} path="/" exact />
            <Route component={CardPackageTravel} path="/pacotes" />
            <Route component={CreatePackageTravel} path="/adicionar-pacote" />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>

  );
}
export default App;