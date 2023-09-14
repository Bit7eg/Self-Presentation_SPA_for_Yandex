import React from 'react';
import Story from './Story';
import Gallery from './Gallery';
import Feature from './Feature';
import Links from './Links';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Привет Яндекс.Практикум!</h1>
        <span>Божья коровка переезжает из Академгородка</span>
      </header>
      <main>
        <Story />
        <Gallery />
        <Feature />
        <Links />
      </main>
    </div>
  );
}

export default App;
