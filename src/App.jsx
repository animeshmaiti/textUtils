import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {useState} from 'react'

function App() {
  const [myStyle,setMyStyle]= useState({
    color: "white",
    backgroundColor: '#212529',
    btnText: "light mode",
    nav_bg:"navbar navbar-expand-lg bg-dark",
    nav_style:"dark",
  });
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "#212529",
        backgroundColor: "white",
        btnText: "Dark Mode",
        nav_bg:"navbar navbar-expand-lg",
        nav_style:"light",
      });
    } else {
        setMyStyle({
        color: "white",
        backgroundColor: "#212529",
        btnText: "Light Mode",
        nav_bg:"navbar navbar-expand-lg bg-dark",
        nav_style:"dark",
      });
    }
  };
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" myTheme={myStyle} toggleStyle={toggleStyle}/>
      <TextForm heading="Enter your text here" myTheme={myStyle}/>
    </>
  );
}

export default App;
