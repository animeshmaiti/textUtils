import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState ,useEffect} from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "#212529",
    btnText: "light mode",
    nav_bg: "navbar navbar-expand-lg bg-dark",
    nav_style: "dark",
  });
  useEffect(() => {
    document.body.style.backgroundColor = myStyle.color === 'white' ? '#212529' : 'white';
    document.body.style.color = myStyle.color === 'white' ? 'white' : '#212529';
    // Add more styles as needed
  }, [myStyle.color]);
  const [alert, setAlert] = useState(null);
  const showAlert = (type, massage) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
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
      showAlert("success", "Light mode is enabled");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
        btnText: "Light Mode",
        nav_bg: "navbar navbar-expand-lg bg-dark",
        nav_style: "dark",
      });
      showAlert("success", "Dark mode is enabled");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          myTheme={myStyle}
          toggleStyle={toggleStyle}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm heading="Enter your text here" myTheme={myStyle} />}/>
          <Route path="/about" element={<About myTheme={myStyle}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
