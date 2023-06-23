import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";

import Home from "./pages/Home";


import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";


// Pfade können je nach Ordnerstruktur variieren

const App = () => {
  return (
    <div className="app">
      
      <Routes>
        

        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />

          
          <Route path="category/:category" element={<CategoryPage />} />
          
        </Route>
      </Routes>
    </div>
  );
};

export default App;
