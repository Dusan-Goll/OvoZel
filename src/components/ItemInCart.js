import './ItemInCart.css';
import Controls from './Controls.js';

function ItemInCart({ ware, onChangeQuantity, onDiscardItem }) {
  return (
    <li className="item-in-cart">
      <h3>{ware.name}</h3>
  
      <img
        className="ware-picture"
        src={ware.src}
        alt={ware.alt}
      />

      <p>cena/kus: {ware.cost} kreditů</p>
      <p>cena: {ware.cost * ware.quantity} kreditů</p>

      <Controls 
        ware={ware}
        onChangeQuantity={onChangeQuantity}
        onDiscardItem={onDiscardItem}
      />
    </li>
  );
}

export default ItemInCart;