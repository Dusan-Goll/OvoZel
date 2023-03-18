export default function FilteredList({ vyraz, zbozi }) {
  let lowVyraz = vyraz.toLowerCase();

  return (
    <ul>
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
          </li>
        ))
      }
    </ul>
  );
}