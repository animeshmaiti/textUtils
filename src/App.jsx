import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import TextForm from "./components/TextForm";
import { useState ,useEffect} from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "#212529",
    btnText: "Dark Mode",
    nav_bg: "navbar navbar-expand-lg bg-dark",
    nav_style: "dark",
    svg_style:"rgba(222, 226, 230, 0.75)"
  });
  useEffect(() => {
    document.body.style.backgroundColor = myStyle.color === 'white' ? '#212529' : 'white';
    document.body.style.color = myStyle.color === 'white' ? 'white' : '#212529';
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
    const svgElements = document.querySelectorAll('svg'); // Select all SVG elements
    if (myStyle.color === "white") {
      setMyStyle({
        color: "#212529",
        backgroundColor: "white",
        btnText: "Light Mode",
        nav_bg: "navbar navbar-expand-lg",
        nav_style: "light",
        svg_style:"rgba(67, 68, 68, 0.75)"
      });
      showAlert("success", "Light mode is enabled");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
        btnText: "Dark Mode",
        nav_bg: "navbar navbar-expand-lg bg-dark",
        nav_style: "dark",
        svg_style:"rgba(222, 226, 230, 0.75)"
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
          <Route exact path="/" element={<TextForm heading="Enter your text here" myTheme={myStyle} />}/>
          <Route exact path="/about" element={<About myTheme={myStyle}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer myTheme={myStyle}/>
      </Router>
    </>
  );
}

export default App;
