import "./App.css";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import Header from "./components/Ui/Header";
import Event from "./pages/Events"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Footer from "./pages/Footer";
import FooterCom from "./pages/FooterCom";
function App() {
  return (
    <Box>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/event" element={<Event />} />
        </Routes>
        <FooterCom/>
        <Footer/>
      </BrowserRouter>
    </Box>
  );
}

export default App;
