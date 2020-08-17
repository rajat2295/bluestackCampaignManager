import React from 'react';
import './App.css';
import ListPage from './components/ListPage';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';

// Root Directory of the project

function App() {


  return (
    <div className="App">
      {/* Modaly Layer For Price Detail */}
      <Modal /> 
      {/* BlueStack Header */}
      <Header />
      {/* Main Content */}
      <ListPage /> 
    </div>
  );
}

export default App;

// Root Directory of the project