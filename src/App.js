import './App.css';
import Vyhledavani from './components/Vyhledavani.js';
import FilteredList from './components/FilteredList.js';
import Kosik from './components/Kosik.js';
import vseZbozi from './components/zbozi.js';
import { useState } from 'react';

let seznamZbozi = Object.values(vseZbozi);

function App() {
  const [vyraz, setVyraz] = useState('');
  const [zboziKosik, setZboziKosik] = useState([]);

  function handleChange(e) {
    setVyraz(e.target.value);
  }

  function handleUpdateKosik(polozka) {
    let nextZboziKosik;

    if (zboziKosik.length === 0) {
      polozka.pocet = 1;
      nextZboziKosik = [polozka];
    } else {

      if (zboziKosik.some(zb => zb.name === polozka.name)) {
        nextZboziKosik = zboziKosik.map(zbozi => {
          if (zbozi.name === polozka.name) {
            return {...zbozi, pocet: zbozi.pocet + 1};
          } else {
            return zbozi;
          }
        });
      } else {
        polozka.pocet = 1;
        nextZboziKosik = [...zboziKosik, polozka];
      }
    }

    setZboziKosik(nextZboziKosik);
  }

  return (
    <>
      <header>
        <h1>potraviny</h1>
      </header>

      <main>
        <div className="search-and-results">
          <Vyhledavani vyraz={vyraz} onHandleChange={handleChange}/>
          <FilteredList
            vyraz={vyraz}
            zbozi={seznamZbozi}
            onUpdateKosik={handleUpdateKosik}
          />
        </div>

        <Kosik vKosiku={zboziKosik} />
      </main>
    </>
  );
}

export default App;
