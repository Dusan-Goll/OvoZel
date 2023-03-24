import './FilteredItem.css';

function FilteredItem({ ware, onAddToCart  }) {
  return (
    <li className="filtered-list-item">
      <h3>{ware.name}</h3>

      <img
        className="ware-picture"
        src={ware.src}
        alt={ware.alt}
      />

      <p>cena/kus: {ware.cost} kreditů</p>

      <button onClick={(e) => {onAddToCart(ware)}}>
        přidat do košíku
      </button>
    </li>
  );
}

export default FilteredItem;