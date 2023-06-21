import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";


import Home from "./pages/Home";


// import GroupExample from "./components/cards/Cards";

import Elektro from './pages/Elektro';
import Haushaltsware from './pages/Haushaltsware';
import Garten from './pages/Garten';
import Mode from './pages/Mode';

import { Routes, Route } from "react-router-dom";

// Pfade können je nach Ordnerstruktur variieren

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Home/>
        
        {/* <GroupExample /> */}
      <Routes>  
          
          <Route path="/elektro" element={<Elektro/>}/>
          <Route path="/haushaltware" element={<Haushaltsware/>}/>
          <Route path="/garten" element={<Garten/>}/>
          <Route path="/mode" element={<Mode/>}/>

        
        
      </Routes>
        
        
        
    </div>
  );
};

export default App;
