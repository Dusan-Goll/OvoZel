import './SearchBar.css';

function SearchBar({ word, onWordChange }) {

  return (
    <>
      <div id="search-bar">
        <label>hledej: </label>
        <input
          id="search-field"
          type="text"
          placeholder="např. citrón, česnek ..."
          value={word}
          onChange={onWordChange}
        />
      </div>
    </>
  );
}

export default SearchBar;