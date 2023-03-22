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
  const [status, setStatus] = useState('search');

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

  function handleChangeQuantity(name, quantity, action) {

    let newPocet;
    if (action === '+') {
      newPocet = quantity + 1;
    } else if (action === '-' && quantity > 1) {
      newPocet = quantity - 1;
    } else {
      newPocet = quantity;
    }

    let nextZboziKosik = zboziKosik.map(zbozi => {

      if (zbozi.name === name) {
        return {...zbozi, pocet: newPocet}
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
        <h1>potraviny u Gollů</h1>
        <button id="nabidka" onClick={(e) => setStatus('search')}>
          nabídka
        </button>
        <button id="kosik" onClick={(e) => setStatus('cart')}>
          <img
            className="cart-icon" src="./img/svgs/cart.svg"
            alt="ikonka nákupního košíku"
          />
          <div className="cisilko">2</div>
        </button>
      </header>

      <main>
        {status === 'search' && (
          <div className="search-and-results">
            <Vyhledavani vyraz={vyraz} onHandleChange={handleChange}/>
            <FilteredList
              vyraz={vyraz}
              zbozi={seznamZbozi}
              onPridejDoKosiku={handlePridejDoKosiku}
            />
          </div>
        )}
        {status === 'cart' && (
          <Kosik
            vKosiku={zboziKosik}
            onChangeQuantity={handleChangeQuantity}
            onDiscardItem={handleDiscardItem}
          />
        )}
      </main>
    </>
  );
}

export default App;
