import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import "./index.css";
import FooterNav from "./components/FooterNav";

function App() {
  return (
    <div className="bg-darkBlue rounded-default border border-border relative w-[calc(100vw-100px)] h-[calc(100vh-100px)] font-body">
      <Router>
        <HeaderNav />
        <div className="w-full h-[calc(100%-56px-50px)]">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </div>
        <FooterNav />
      </Router>
    </div>
  );
}

export default App;
