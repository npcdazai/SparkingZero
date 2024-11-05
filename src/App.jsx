import "./App.css";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import Home from "./pages/Home";
import Header from "./components/Ui/Header";
import Event from "./pages/Events"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import HeaderMobile from "./components/mobile/HeaderMobile";

function App() {
  const HeaderComponent = useBreakpointValue({
    base: <HeaderMobile />,
    lg: <Header />,
  });
  return (
    <Box>
      <BrowserRouter>
        {HeaderComponent}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
