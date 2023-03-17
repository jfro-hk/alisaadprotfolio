/** @format */
import React from "react";
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
        {/* <RouteList /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/media" element={<Media />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/boothDesigns" element={<BoothDesigns />} />
          <Route exact path="/:id" element={<BoothDesignsDetails />} />
          <Route
            exact
            path="/restaurantsCafes"
            element={<RestaurantsCafes />}
          />
          <Route exact path="/:id" element={<RestaurantsCafesDetails />} />
          <Route exact path="/houseDesigns" element={<HouseDesigns />} />
          <Route exact path="/:id" element={<HouseDesignsDetails />} />
          <Route exact path="/commercials" element={<Commercials />} />
          <Route exact path="/:id" element={<CommercialsDetails />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

// const RouteList = () => {
//   return (
//     <Routes>
//       <Route exact path="/" element={<Home />} />
//       <Route exact path="/about" element={<About />} />
//       <Route exact path="/media" element={<Media />} />
//       <Route exact path="/projects" element={<Projects />} />
//       <Route exact path="/boothDesigns" element={<BoothDesigns />} />
//       <Route exact path="/:id" element={<BoothDesignsDetails />} />
//       <Route exact path="/restaurantsCafes" element={<RestaurantsCafes />} />
//       <Route exact path="/:id" element={<RestaurantsCafesDetails />} />
//       <Route exact path="/houseDesigns" element={<HouseDesigns />} />
//       <Route exact path="/:id" element={<HouseDesignsDetails />} />
//       <Route exact path="/commercials" element={<Commercials />} />
//       <Route exact path="/:id" element={<CommercialsDetails />} />
//       <Route exact path="/contact" element={<Contact />} />
//     </Routes>
//   );
// };
export default App;
