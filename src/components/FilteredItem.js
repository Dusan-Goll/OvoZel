import './FilteredItem.css';

function FilteredItem({ ware, onAddToCart, cartItems }) {
  return (
    <li className="filtered-list-item">
      <h3>{ware.name}</h3>

      <img
        className="ware-picture"
        src={ware.src}
        alt={ware.alt}
      />

      <p>cena: <span className="bold">{ware.cost},-</span> za ks</p>

      {
        (
          cartItems.length === 0 ||
          !cartItems.some(item => item.name === ware.name)
        ) ? (
          <button onClick={(e) => onAddToCart(ware)}>
            přidat do košíku
          </button>
        ) : (<p>Zboží již máte v košíku.</p>)
      }
    </li>
  );
}

export default FilteredItem;