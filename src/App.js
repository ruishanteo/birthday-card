import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./Home.js";
import { Header } from "./Header.js";
import { Page1 } from "./Pages/Page1.js";
import { Page2 } from "./Pages/Page2.js";
import { Page3 } from "./Pages/Page3.js";
import { Pictures } from "./Pages/Pictures.js";
import { End } from "./Pages/End.js";
import { Yes } from "./Pages/Yes.js";

import desktopImage from "./Pictures/desktop-background-placeholder.jpg";
import mobileImage from "./Pictures/mobile-background-placeholder.jpg";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  status: {
    danger: "#ebaaa7",
  },
  palette: {
    primary: {
      main: "#e0fbff",
      darker: "#053e85",
    },
    neutral: {
      main: "#b7b0f5",
      contrastText: "#fff",
    },
  },
});

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 915 ? desktopImage : mobileImage;
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <Header />
          <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/pictures" element={<Pictures />} />
              <Route path="/end" element={<End />} />
              <Route path="/yes" element={<Yes />} />
            </Routes>
          </div>
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
