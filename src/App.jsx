import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
  });
  useEffect(() => {
    document.body.style.backgroundColor = myStyle.color === 'white' ? '#212529' : 'white';
    document.body.style.color = myStyle.color === 'white' ? 'white' : '#212529';
    const setDefaultSvgColor = () => {
      const svgElements = document.querySelectorAll('svg'); // Select all SVG elements
      const defaultColor = 'rgba(222, 226, 230, 0.75)'; // Set your default color
      svgElements.forEach((svg) => {
        if (myStyle.color==="white") {
          svg.style.fill = defaultColor; // Set the default fill color only if it's not already set
        }
      });
    };
    setDefaultSvgColor();
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
      });
      showAlert("success", "Light mode is enabled");
      svgElements.forEach((svg) => {
        svg.style.fill = '#212529'; // Change the fill color
      });
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
        btnText: "Dark Mode",
        nav_bg: "navbar navbar-expand-lg bg-dark",
        nav_style: "dark",
      });
      showAlert("success", "Dark mode is enabled");
      svgElements.forEach((svg) => {
        svg.style.fill = 'rgba(222, 226, 230, 0.75)'; // Change the fill color
      });
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
        </Routes>
        <Footer myTheme={myStyle}/>
      </Router>
    </>
  );
}

export default App;
