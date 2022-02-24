import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "../src/components/Gallery/Gallery";
import Navbar from "../src/components/Navbar/Navbar";
import Home from "../src/components/Home";
import Locations from "../src/components/Locations/Locations";
//import { ProfileContext } from './contexts/ProfileContext';
import "./App.css";

const profile = {
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",

}

function App() {
  return (
    //<ProfileContext.Provider value={profile}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="locations" element={<Locations />} />
        </Routes>
      </BrowserRouter>
      //</ProfileContext.Provider>
  );
}

export default App;
