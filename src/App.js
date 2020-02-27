import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className='App'>
      <header>
        <Logo className='logo' alt='Dr Slash Logo' />
      </header>
    </div>
  );
}

export default App;
