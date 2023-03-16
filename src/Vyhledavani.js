
export default function Vyhledavani({ vyraz, onHandleChange }) {

  return (
    <>
      <form>
        <label>hledej: </label>
        <input
          id="vyhledavaci-pole"
          type="text"
          placeholder="např. paprika, česnek ..."
          value={vyraz}
          onChange={onHandleChange}
        />
      </form>
    </>
  );
}