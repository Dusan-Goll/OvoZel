import './App.css';
import Vyhledavani from './Vyhledavani.js';
import vseZbozi from './zbozi.js';
import { useState } from 'react';

let prvotniZbozi = Object.values(vseZbozi);

function App() {
  const [aktualniZbozi, setAktualniZbozi] = useState(prvotniZbozi);
  const [vyraz, setVyraz] = useState('');

  function handleChange(e) {
    setVyraz(e.target.value);
  }

  return (
    <>
      <h1>potraviny</h1>

      <Vyhledavani vyraz={vyraz} onHandleChange={handleChange}/>
      <p>hledám: {vyraz}</p>

      <ul>
        {aktualniZbozi.filter(polozka => polozka.name === vyraz)
                      .map(zbozi => (
                        <li key={zbozi.id} className="predmet-seznamu">
                          <h3>{zbozi.name}</h3>
                          <img
                            className="obrazek-zbozi"
                            src={zbozi.src}
                            alt={zbozi.alt}
                          />
                          {/* <button onClick={() => setAktualniZbozi(
                            aktualniZbozi.filter(z => z.id !== zbozi.id)
                          )}>
                            odebrat
                          </button> */}
                        </li>
                      )
        )}
      </ul>
    </>
  );
}

export default App;
