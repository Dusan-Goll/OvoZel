import './Kosik.css';
// import { useState } from 'react';

export default function Kosik({ vKosiku }) {
  // const [obsahKosiku, setObsahKosiku] = useState(vKosiku);
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
                  <p>pocet: {polozka.pocet}ks</p>
                </li>
              )
            )
          )
        }
      </ul>
    </section>
  );
}