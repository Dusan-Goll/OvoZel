import './App.css';
import allGoods from './data/goods.js';

import NavBar from './components/NavBar.js';
import SearchBar from './components/SearchBar.js';
import FilteredList from './components/FilteredList.js';
import Cart from './components/Cart.js';

import { useState } from 'react';

let goodsList = Object.values(allGoods);


export default function App() {
  const [word, setWord] = useState('');
  const [status, setStatus] = useState('search');
  const [cartItems, setCartItems] = useState([]);

  function handleStatusChange(e) {
    setStatus(e.currentTarget.value);
  }

  function handleWordChange(e) {
    setWord(e.target.value);
  }

  function handleAddToCart(itemToAdd) {

    if (!cartItems.some(item => item.name === itemToAdd.name)) {
      setCartItems([...cartItems, {...itemToAdd, quantity: 1}]);
    }
  }

  function handleChangeQuantity(name, quantity, act) {
    let q = quantity;
    let newQuantity = (
      act === '+'? q + 1 : (act === '-' && q > 1? q - 1 : q)
    );

    setCartItems(cartItems.map(item => (
      item.name === name? {...item, quantity: newQuantity} : item
    )));
  }

  function handleDiscardItem(name) {
    setCartItems(cartItems.filter(item => item.name !== name));
  }

  return (
    <>
      <NavBar onStatusChange={handleStatusChange} cartItems={cartItems}/>

      <main>
        {status === 'search' && (
          <div className="search-and-results">
            <SearchBar
              word={word}
              onWordChange={handleWordChange}
            />
            <FilteredList
              word={word}
              goodsList={goodsList}
              onAddToCart={handleAddToCart}
            />
          </div>
        )}
        
        {status === 'cart' && (
          <Cart
            cartItems={cartItems}
            onChangeQuantity={handleChangeQuantity}
            onDiscardItem={handleDiscardItem}
          />
        )}
      </main>
    </>
  );
}
