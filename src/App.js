import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// I'm going to use <Router> to wrap everything

// Importing Routes
import Home from "./routes/Home";
// import About from "./routes/About";
import HeroDetails from "./routes/HeroDetails";
import Footer from './components/Footer';

// Importing Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* we put the <Navbar> outsides <Routes> because it's something we want to see on every page. 
        Can also be placed outside <Router>*/}
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/:id"} element={<HeroDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
