import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "../src/components/Gallery/Gallery";
import Navbar from "../src/components/Navbar/Navbar";
import Home from "../src/components/Home";
import Locations from "../src/components/Locations/Locations";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="locations" element={<Locations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
