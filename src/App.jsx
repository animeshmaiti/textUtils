import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "#212529",
    btnText: "light mode",
    nav_bg: "navbar navbar-expand-lg bg-dark",
    nav_style: "dark",
  });
  const [alert, setAlert] = useState(null);
  const showAlert = (type, massage) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "#212529",
        backgroundColor: "white",
        btnText: "Dark Mode",
        nav_bg: "navbar navbar-expand-lg",
        nav_style: "light",
      });
      showAlert("success","Light mode is enabled");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
        btnText: "Light Mode",
        nav_bg: "navbar navbar-expand-lg bg-dark",
        nav_style: "dark",
      });
      showAlert("success","Dark mode is enabled");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        myTheme={myStyle}
        toggleStyle={toggleStyle}
      />
      <Alert alert={alert}/>
      <TextForm heading="Enter your text here" myTheme={myStyle} />
    </>
  );
}

export default App;
