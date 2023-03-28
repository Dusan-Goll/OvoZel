import './Controls.css';

function Controls({ ware, onChangeQuantity, onDiscardItem }) {
  return (
    <div className="controls">
      <div className="count">{ware.quantity}ks</div>

      <button className="decrease-btn" onClick={(e) => {
        onChangeQuantity(ware.name, ware.quantity, '-')
      }}>
        -
      </button>

      <button className="increase-btn" onClick={(e) => {
        onChangeQuantity(ware.name, ware.quantity, '+')
      }}>
        +
      </button>

      <button
        className="discard-btn"
        onClick={(e) => {onDiscardItem(ware.name)}}
      >
        odebrat
      </button>
    </div>
  );
}

export default Controls;