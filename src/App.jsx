import "./App.css";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import Home from "./pages/Home";
import Header from "./components/Ui/Header";
import Event from "./pages/Events"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import HeaderMobile from "./components/mobile/HeaderMobile";
import Footer from "./pages/Footer";
import FooterCom from "./pages/FooterCom";
import TypesOfPooja from "./pages/TypesOfPooja";
import PoojaOffering from "./pages/PoojaOffering";
import BookPooja from "./pages/BookPooja";
import AllMembers from "./pages/AllMembers";
import CowOffering from "./pages/CowOffering";
import Festivals from "./pages/Festivals";
import { useState } from "react";
function App() {
  const [language, setLanguage] = useState("english");
  const HeaderComponent = useBreakpointValue({
    base: <HeaderMobile language={language} setLanguage={setLanguage} />,
    lg: <Header language={language} setLanguage={setLanguage} />,
  });
  return (
    <Box>
      <BrowserRouter>
        {HeaderComponent}
        <Routes>
          <Route path="/" element={<Home setLanguage={setLanguage} language={language} />} />
          <Route path="/about" element={<About setLanguage={setLanguage} language={language}  />} />
          <Route path="/event" element={<Event language={language} />} />
          <Route path="/pooja" element={<TypesOfPooja />} />
          <Route path="/book-pooja" element={<BookPooja />} />
          <Route path="/pooja-offering" element={<PoojaOffering />} />
          <Route path="/members" element={<AllMembers setLanguage={setLanguage} language={language} />} />
          <Route path="/cow-offering" element={<CowOffering setLanguage={setLanguage} language={language} />} />
          <Route path="/festivals" element={<Festivals />} />
        </Routes>
        <FooterCom />
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
