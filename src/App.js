/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Media from "./components/Media/Media";
import Projects from "./components/Projects/Projects";
import BoothDesigns from "./components/Projects/BoothDesigns/BoothDesigns";
import BoothDesignsDetails from "./components/Projects/BoothDesigns/BoothDesignsDetails/BoothDesignsDetails";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <RouteList />
        <Footer />
      </Router>
    </div>
  );
}

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/media" element={<Media />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/boothDesigns" element={<BoothDesigns />} />
      <Route path="/booth" element={<BoothDesignsDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
export default App;
