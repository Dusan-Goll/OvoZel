import './Kosik.css';

export default function Kosik({
  vKosiku,
  onChangeQuantity,
  onDiscardItem
}) {

  let obsahKosiku = vKosiku;

  function total() {
    let soucet = 0;

    for (let item of obsahKosiku) {
      soucet += item.pocet * item.cost;
    }
    return soucet;
  }

  return (
    <section className="kosik">
      <h2>Kosik</h2>
      {obsahKosiku.length === 0?
        (
          <h4>V košíku nemáte žádné zboží.</h4>
        ) : (
          <ul className='kosik-seznam'>
            <li id="celkem">cena celkem: {total() + ' '}kreditů</li>
            {obsahKosiku.map(
              polozka => (
                <li key={polozka.id} className="zbozi-v-kosiku">
                  <h3>{polozka.name}</h3>
              
                  <img
                  className="obrazek-zbozi"
                  src={polozka.src}
                  alt={polozka.alt}
                  />

                  <p>cena/kus: {polozka.cost} kreditů</p>
                  <p>cena: {polozka.cost * polozka.pocet} kreditů</p>

                  <div className="controls">
                    <button
                      onClick={
                        (e) => {onChangeQuantity(
                          polozka.name, polozka.pocet, '-'
                        )}
                      }
                    >-</button>

                    <p>{polozka.pocet}ks</p>

                    <button
                      onClick={
                        (e) => {onChangeQuantity(polozka.name, polozka.pocet, '+')}
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
            )}
          </ul>
        )
      }
    </section>
  );
}