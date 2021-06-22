import React, { useState, useCallback } from 'react';
import logo from './fa.png';
import './App.css';
import { producto } from './Utils';

function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [total, setTotal] = useState(0);

  const calcularResultado = useCallback(() => {
    setTotal(producto(numA, numB));
  }, [numA, numB]);

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Project by Acevedo Fernando - Ing. Soft. UTN FRRe <br /><br /><br />
        </h3>
        <div>
          <label style={{fontSize: 24, fontFamily :"cursive"}}>Numero 1: </label>
          <input
            value={numA}
            style={{fontSize: 24, width: 100, textAlign: 'center'}}
            onChange={(e) => setNumA(+e.target.value)}
          />
          <label style={{fontSize: 24, fontFamily :"cursive", marginLeft: 30}}>  Numero 2: </label>
          <input
            value={numB}
            style={{fontSize: 24, width: 100, textAlign: 'center'}}
            onChange={(e) => setNumB(+e.target.value)}
          />
        </div>
        <div>
          <button
            style={{fontSize: 24, margin: '40px 0', padding: '3px', fontFamily :"cursive"}}
            onClick={calcularResultado}
          >
            Multiplicar
          </button>
        </div>
        <div>
          <label style={{fontSize: 24, fontFamily :"cursive"}}>Resultado: </label>
          <input
            value={total}
            style={{fontSize: 24, width: 100, textAlign: 'center', backgroundColor: 'white'}}
            disabled
            readOnly
          />
        </div>
      </header>
    </div>
  );
}

export default App;
