/** @format */
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
import RestaurantsCafes from "./components/Projects/RestaurantsCafes/RestaurantsCafes";
import RestaurantsCafesDetails from "./components/Projects/RestaurantsCafes/RestaurantsCafesDetails/RestaurantsCafesDetails";
import HouseDesigns from "./components/Projects/HouseDesigns/HouseDesigns";
import HouseDesignsDetails from "./components/Projects/HouseDesigns/HouseDesignsDetails/HouseDesignsDetails";
import Commercials from "./components/Projects/Commercials/Commercials";
import CommercialsDetails from "./components/Projects/Commercials/CommercialsDetails/CommercialsDetails";

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
      <Route path="/:id" element={<BoothDesignsDetails />} />
      <Route path="/restaurantsCafes" element={<RestaurantsCafes />} />
      <Route path="/:id" element={<RestaurantsCafesDetails />} />
      <Route path="/houseDesigns" element={<HouseDesigns />} />
      <Route path="/:id" element={<HouseDesignsDetails />} />
      <Route path="/commercials" element={<Commercials />} />
      <Route path="/:id" element={<CommercialsDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
export default App;
