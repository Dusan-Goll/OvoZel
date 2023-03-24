import './NavBar.css'

export default function NavBar({ onStatusChange, cartItems }) {
  return (
    <header>
      <h1>potraviny u Gollů</h1>

      <button id="bid" value="search" onClick={onStatusChange}>
        nabídka
      </button>
      
      <button id="cart-button" value="cart" onClick={onStatusChange}>
        <img
          className="cart-icon" src="./img/svgs/cart.svg"
          alt="ikonka nákupního košíku"
        />
        <div className="red-number">{cartItems.length}</div>
      </button>
    </header>
  );
}