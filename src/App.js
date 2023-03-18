import './App.css';
import Vyhledavani from './Vyhledavani.js';
import FilteredList from './FilteredList.js';
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
      <h1>potraviny</h1>

      <Vyhledavani vyraz={vyraz} onHandleChange={handleChange}/>

      <FilteredList vyraz={vyraz} zbozi={seznamZbozi} />
    </>
  );
}

export default App;
