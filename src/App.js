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

  function handlePridejDoKosiku(polozka) {
    let nextZboziKosik;

    if (!zboziKosik.some(zb => zb.name === polozka.name)) {
      polozka.pocet = 1;
      nextZboziKosik = [...zboziKosik, polozka];
    } else {
      nextZboziKosik = zboziKosik;
    }

    setZboziKosik(nextZboziKosik);
  }

  function handleIncreaseQuantity(name, quantity) {
    let nextZboziKosik = zboziKosik.map(zbozi => {

      if (zbozi.name === name) {
        return {...zbozi, pocet: quantity + 1}
      } else {
        return zbozi;
      }
    });

    setZboziKosik(nextZboziKosik);
  }

  function handleDecreaseQuantity(name, quantity) {
    let nextZboziKosik = zboziKosik.map(zbozi => {

      if (zbozi.name === name && quantity > 1) {
        return {...zbozi, pocet: quantity - 1}
      } else {
        return zbozi;
      }
    });

    setZboziKosik(nextZboziKosik);
  }

  function handleDiscardItem(name) {
    let nextZboziKosik = zboziKosik.filter(
      zbozi => zbozi.name !== name
    );

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
            onPridejDoKosiku={handlePridejDoKosiku}
          />
        </div>

        <Kosik
          vKosiku={zboziKosik}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
          onDiscardItem={handleDiscardItem}
        />
      </main>
    </>
  );
}

export default App;
