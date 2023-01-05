import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";

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
      {/* <Grid container spacing={2}>
        <Grid item xs={12}>
          <Home />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Mini Projects</h1>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <Counter />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <Search />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <Checklist />
            </Card>
          </Grid>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default App;
