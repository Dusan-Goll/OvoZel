import './App.css';
import Vyhledavani from './Vyhledavani.js';
import FilteredList from './FilteredList.js';
import Kosik from './Kosik.js';
import vseZbozi from './zbozi.js';
import { useState } from 'react';

let seznamZbozi = Object.values(vseZbozi);

function App() {
  const [vyraz, setVyraz] = useState('');

  function handleChange(e) {
    setVyraz(e.target.value);
  }

  return (
    <>
      <header>
        <h1>potraviny</h1>
      </header>

      <main>
        <div className="search-and-results">
          <Vyhledavani vyraz={vyraz} onHandleChange={handleChange}/>
          <FilteredList vyraz={vyraz} zbozi={seznamZbozi} />
        </div>

        <Kosik />
      </main>
    </>
  );
}

export default App;
