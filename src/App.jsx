import logo from "./logo.svg";
import "./App.css";

let name = "Animesh";
function App() {
  return (
    <>
      <div className="App">
        <img className="App-logo" src={logo} alt="" />
        <h1 className="blank">this is {name}</h1>
      </div>
      <div className="desc">
        <h4>My first React App</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          beatae error doloremque laborum! Dolores, eum totam. Ducimus, deserunt
          quas dicta nobis illum quis, mollitia, quisquam at ut architecto omnis
          corrupti sint nesciunt? Qui, autem.
        </p>
      </div>
    </>
  );
}

export default App;
