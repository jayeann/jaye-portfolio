import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//common
import NavigationBar from "./common/NavigationBar";
import Footer from "./common/Footer";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";

//style
// import "./App.scss";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
