import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import FooterNav from './components/FooterNav';

function App() {
  return (
    <div className="bg-darkBlue rounded-default border border-border relative w-container h-container font-body">
      <Router>
        <HeaderNav />
        <div className='w-full h-content'>
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
