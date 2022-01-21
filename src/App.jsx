import React, { useContext, useState, useEffect } from "react";

//import App.css files mainn css //
import "./App.css";

//import containers  files //
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";

//import components  files //
import { Cta, Brand, Navbar } from "./components";
import { ThemeContext } from "./ThemeContexts/ThemeContext";
import { ClimbingBoxLoader } from "react-spinners";

const App = () => {
  // DarkMode //
  const { darkMode } = useContext(ThemeContext);

  // Spinner Loader //
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinners">
          <ClimbingBoxLoader size={30} color={"#F37A24"} loading={loading} />
        </div>
      ) : (
        <div className={darkMode ? "dark" : "light"}>
          <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
          <Brand />
          <WhatGPT3 />
          <Features />
          <Possibility />
          <Cta />
          <Blog />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
