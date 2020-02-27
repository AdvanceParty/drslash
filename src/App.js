import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import Devnote from './Devnote';

function App() {
  const { port, hostname } = window.location;
  const portWarning = hostname === 'localhost' && port != '3000';

  return (
    <div id='App'>
      <header>
        <Logo className='logo' alt='Dr Slash Logo' />
      </header>
      {portWarning ? <Devnote /> : ''}
    </div>
  );
}

export default App;
