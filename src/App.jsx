import { BrowserRouter as Router } from "react-router-dom";
import HeaderNav from "components/HeaderNav";
import FooterNav from "components/FooterNav";



import "index.css";
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <div className="bg-darkBlue rounded-default border border-border relative w-[calc(100vw-100px)] h-[calc(100vh-100px)] font-body">
      <Router>
        <HeaderNav />
        <div className="w-full h-[calc(100%-56px-50px)]">
          <AnimatedRoutes />
        </div>
        <FooterNav />
      </Router>
    </div>
  );
}

export default App;
