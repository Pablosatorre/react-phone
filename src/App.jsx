import { useState } from 'react';
import './App.css';
import { logo } from './png_apps/galeria.png';

function App() {
  return (
    <div className="mockup-phone border-primary">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1"></div>
      </div>
    </div>
  );
}

export default App;
