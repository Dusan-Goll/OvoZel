import './Cart.css';
import CartItem from './CartItem.js';

function Cart({ cartItems, onChangeQuantity, onDiscardItem}) {

  function total() {
    let sum = 0;

    for (let item of cartItems) sum += item.quantity * item.cost;
    return sum;
  }

  return (
    <section className="cart">
      <h2>Váš košík</h2>
      
      {cartItems.length === 0 && <h4>V košíku nemáte žádné zboží.</h4>}

      {cartItems.length > 0 && (
        <ul className='cart-list'>
          <li id="total-counter">
            cena celkem: <span className="bold">{total() + ' '},-</span>
          </li>

          {cartItems.map(item => (
            <CartItem 
              key={item.id}
              ware={item}
              onChangeQuantity={onChangeQuantity}
              onDiscardItem={onDiscardItem}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;