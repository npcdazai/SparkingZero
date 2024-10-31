import "./App.css";
import { Box } from "@chakra-ui/react";
import Home from "./components/Home";
import Header from "./components/Ui/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
