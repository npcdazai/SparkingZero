import "./App.css";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import Header from "./components/Ui/Header";
import Event from "./pages/Events"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
