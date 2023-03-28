import './CartItem.css';
import Controls from './Controls.js';

function CartItem({ ware, onChangeQuantity, onDiscardItem }) {
  return (
    <li className="item-in-cart">
      <img
        className="ware-picture"
        src={ware.src}
        alt={ware.alt}
      />

      <div className="description">
        <h3>{ware.name}</h3>

        <p>cena za ks: {ware.cost},-</p>
        <p>cena: {ware.cost * ware.quantity},-</p>
      </div>

      <Controls 
        ware={ware}
        onChangeQuantity={onChangeQuantity}
        onDiscardItem={onDiscardItem}
      />
    </li>
  );
}

export default CartItem;