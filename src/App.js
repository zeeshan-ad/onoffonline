import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState([]);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position === 0) {
      setScrollPosition([]);
    } else {
      setScrollPosition((prevState) => [...prevState, position]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Router>
        {scrollPosition[scrollPosition.length - 1] <
          scrollPosition[scrollPosition.length - 2] ||
        scrollPosition[scrollPosition.length - 1] ===
          scrollPosition[scrollPosition.length - 2] ? (
          <Navigation />
        ) : null}
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
