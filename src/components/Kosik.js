import './Kosik.css';
// import { useState } from 'react';

export default function Kosik({
  vKosiku,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onDiscardItem
}) {

  let obsahKosiku = vKosiku;

  return (
    <section className="kosik">
      <h2>Kosik</h2>
      <ul className='kosik-seznam'>
        {obsahKosiku.length === 0?
          (
            <h4>V košíku nemáte žádné zboží.</h4>
          ) : (
            obsahKosiku.map(
              polozka => (
                <li key={polozka.id} className="zbozi-v-kosiku">
                  <h3>{polozka.name}</h3>
              
                  <img
                  className="obrazek-zbozi"
                  src={polozka.src}
                  alt={polozka.alt}
                  />

                  <div className="controls">
                    <button
                      onClick={
                        (e) => {onDecreaseQuantity(polozka.name, polozka.pocet)}
                      }
                    >-</button>

                    <p>{polozka.pocet}ks</p>

                    <button
                      onClick={
                        (e) => {onIncreaseQuantity(polozka.name, polozka.pocet)}
                      }
                    >
                      +
                    </button>

                    <button
                      onClick={
                        (e) => {onDiscardItem(polozka.name)}
                      }
                    >
                      odebrat
                    </button>
                  </div>
                </li>
              )
            )
          )
        }
      </ul>
    </section>
  );
}