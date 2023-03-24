import './FilteredList.css';
import FilteredItem from './FilteredItem.js';

function FilteredList({ word, goodsList, onAddToCart }) {
  let lowerCased = word.toLowerCase();

  return (
    <ul className="filtered-list">
      {
        goodsList.filter(
          item => (
            item.name.toLowerCase().startsWith(lowerCased) ||
            item.name.toLowerCase().split(" ").some(wordPart => (
              wordPart.startsWith(lowerCased)
            ))
          )
        )
        .map(filteredItem => (
          <FilteredItem
            key={filteredItem.id}
            ware={filteredItem}
            onAddToCart={onAddToCart}
          />
        ))
      }
    </ul>
  );
}

export default FilteredList;