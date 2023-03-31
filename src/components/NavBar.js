import './NavBar.css'

export default function NavBar({ onStatusChange, cartItems }) {
  return (
    <header className="section">
      <h1>OvoZel</h1>

      <div className="nav-buttons">
        <button id="bid-button" value="search" onClick={onStatusChange}>
          nabídka
        </button>
        
        <button id="cart-button" value="cart" onClick={onStatusChange}>
          <img
            className="cart-icon" src="./img/svgs/cart.svg"
            alt="ikonka nákupního košíku"
          />
          <div className="red-number">{cartItems.length}</div>
        </button>
      </div>
    </header>
  );
}