import './App.css';
import vseZbozi from './zbozi.js';
import { useState } from 'react';

let prvotniZbozi = Object.values(vseZbozi);

function App() {
  const [aktualniZbozi, setAktualniZbozi] = useState(prvotniZbozi);

  return (
    <>
      <h1>potraviny</h1>
      <ul>
        {aktualniZbozi.map(zbozi => (
          <li key={zbozi.id} className="predmet-seznamu">
            <h3>{zbozi.name}</h3>
            <img
              className="obrazek-zbozi"
              src={zbozi.src}
              alt={zbozi.alt}
            />
            <button onClick={() => setAktualniZbozi(
              aktualniZbozi.filter(z => z.id !== zbozi.id)
            )}>
              odebrat
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
