import './FilteredList.css';

export default function FilteredList({ vyraz, zbozi, onPridejDoKosiku }) {
  let lowVyraz = vyraz.toLowerCase();

  return (
    <ul className="filtered-list">
      {vyraz !== '' && 
        zbozi.filter(
          polozka => (
            (polozka.name.toLowerCase().split(" ").some(
              word => word.startsWith(lowVyraz)
            )) || polozka.name.toLowerCase().startsWith(lowVyraz)
          )
        )
        .map(z => (
          <li key={z.id} className="predmet-seznamu">
            <h3>{z.name}</h3>
            <img
              className="obrazek-zbozi"
              src={z.src}
              alt={z.alt}
            />
            <p>cena/kus: {z.cost} kreditů</p>
            <button onClick={(e) => {onPridejDoKosiku(z)}}>
              přidat do košíku
            </button>
          </li>
        ))
      }
    </ul>
  );
}