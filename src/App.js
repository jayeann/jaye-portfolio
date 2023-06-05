import React from "react";
import { Router, Routes, Route } from "react-router-dom";

//common
import NavigationBar from "./common/NavigationBar";
import Footer from "./common/Footer";

//pages
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import PlaygroundPage from "./pages/PlaygroundPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

//style
// import "./App.scss";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:item" element={<ProjectDetailsPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
