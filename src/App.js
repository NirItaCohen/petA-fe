import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import "./App.css";

import { Home } from "./pages/Home/Home.jsx";
import { MyPets } from "./pages/My_Pets/MyPets.jsx";
import { Header } from "./components/Header/Header.jsx";

export const AppContext = createContext();
function App() {
  const [user, setUser] = useState({ name: "Nir" });
  // const [user, setUser] = useState(null);

  return (
    <div className="App">
      <AppContext.Provider value={{ user, setUser }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MyPets" element={<MyPets />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
