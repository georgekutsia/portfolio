import './index.css'; 
import Routers from "./Routers";
import { CornerNavbar } from "./components";
import React, { useState, useEffect } from "react";
import { PrimeReactProvider } from "primereact/api";
import rickFavoriteData from "./data/rickfavorite.data";
export const GlobalContext = React.createContext();
function App() {
  const [favorites, setFavorites] = useState(rickFavoriteData);
  const [modeDarkLight, setModeDarkLight] = useState("dark");
  const [darkLightText, setdarkLightText] = useState("white")

  const handleChangeDarkLight = () => {
    const newMode = modeDarkLight === "dark" ? "light" : "dark";
    if (modeDarkLight === "dark") {
      setdarkLightText("red")
      document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my-white');
    } else {
      setdarkLightText("blue")
      document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--my-black');
    }
    setModeDarkLight(newMode);
  };

  return (
    <PrimeReactProvider>
      <GlobalContext.Provider value={{ favorites, setFavorites, modeDarkLight, setModeDarkLight, handleChangeDarkLight, darkLightText}}>
        <div >
        <h1 style={{color: `${darkLightText}`}}>bla</h1>
          <CornerNavbar />
          <Routers />
        </div>
      </GlobalContext.Provider>
    </PrimeReactProvider>
  );
}

export default App;
