import './Controls.css';

function Controls({ ware, onChangeQuantity, onDiscardItem }) {
  return (
    <div className="controls">
      <button onClick={(e) => {
        onChangeQuantity(ware.name, ware.quantity, '-')
      }}>
        -
      </button>

      <p>{ware.quantity}ks</p>

      <button value={'+'} onClick={(e) => {
        onChangeQuantity(ware.name, ware.quantity, '+')
      }}>
        +
      </button>

      <button onClick={(e) => {onDiscardItem(ware.name)}}>
        odebrat
      </button>
    </div>
  );
}

export default Controls;