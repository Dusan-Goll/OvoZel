import './App.css';

function App() {
  return (
    <>
      <h1>potraviny</h1>
      <ul>
        <li key="0" className="predmet-seznamu">
          <h3>Paprika červená</h3>
          <img
            className="obrazek-zbozi"
            src={require("./img/Paprika_cervena.jpg")}
            alt="čerstvá červená paprika na dřevěném prkénku"
            />
        </li>

        <li key="1" className="predmet-seznamu">
        <h3>Paprika žlutá</h3>
        <img
            className="obrazek-zbozi"
            src={require("./img/Paprika_zluta.jpg")}
            alt="čerstvá žlutá paprika na dřevěném prkénku"
              
            />
        </li>

        <li key="1" className="predmet-seznamu">
        <h3>Paprika zelená</h3>
        <img
            className="obrazek-zbozi"
            src={require("./img/Paprika_zelena.jpg")}
            alt="čerstvá zelená paprika na dřevěném prkénku"
              
            />
        </li>

        <li key="3" className="predmet-seznamu">
        <h3>Česnek</h3>
        <img
            className="obrazek-zbozi"
            src={require("./img/Cesnek.jpg")}
            alt="palice suchého česneku na dřevěném prkénku"
            />
        </li>
      </ul>
    </>
  );
}

export default App;
