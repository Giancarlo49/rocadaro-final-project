import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";

import Home from "./pages/Home";



import Elektro from "./pages/Elektro";
import Haushaltsware from "./pages/Haushaltsware";
import Garten from "./pages/Garten";
import Mode from "./pages/Mode";

import { Routes, Route } from "react-router-dom";


// Pfade können je nach Ordnerstruktur variieren

const App = () => {
  return (
    <div className="app">
      
      <Routes>
        

        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />

          <Route path="elektro" element={<Elektro />} />
          <Route path="haushaltsware" element={<Haushaltsware />} />
          <Route path="garten" element={<Garten />} />
          <Route path="mode" element={<Mode />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
