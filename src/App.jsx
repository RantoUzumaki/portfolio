import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/header/header-nav";
import Home from "./components/home/home";
import AboutMe from "./components/about-me/about-me";
import Projects from "./components/projects/projects";
import ContactMe from "./components/contact-me/contact-me";
import FooterNav from "./components/footer/footer-nav";

function App() {
  return (
    <div className="main-container">
      <Router>
        <HeaderNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
        <FooterNav />
      </Router>
    </div>
  );
}

export default App;
