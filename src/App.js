import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import "./App.css";

import { Home } from "./pages/Home/Home.jsx";
import { MyPets } from "./pages/My_Pets/MyPets.jsx";
import { Navbar } from "./components/Navbar/Navbar";
import { Search } from "./pages/Search/Search";
import { Pet } from "./pages/Pet/Pet";

export const AppContext = createContext();
function App() {
  const [user, setUser] = useState({ name: "Nir" });
  // const [user, setUser] = useState(null);

  return (
    <div className="App">
      <AppContext.Provider value={{ user, setUser }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MyPets" element={<MyPets />} />
            <Route path="/pet/:pet" element={<Pet />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
