import React from 'react';
import './App.css';
import ListPage from './components/ListPage';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';

function App() {


  return (
    <div className="App">
      <Modal />
      <Header />
      <ListPage /> 
    </div>
  );
}

export default App;
