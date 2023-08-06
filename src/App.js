import Routers from "./Routers";
import {AllNavbars, CornerNavbar, MainFooter } from "./components";
import React, { useState } from "react";

import rickFavoriteData from "./data/rickfavorite.data"
export const GlobalContext = React.createContext()

function App() {
  const [showNavbars, setShowNavbars] = useState(false)
  const handleNavbars = (state)=>{
    setShowNavbars(state);
  }
  const [favorites, setFavorites] = useState(rickFavoriteData);
  return (
    <div className="app ">
      <GlobalContext.Provider value={{ favorites, setFavorites }}>
        <CornerNavbar handle1={handleNavbars} />
        {showNavbars && <AllNavbars handleNavbars={handleNavbars} />}
        <Routers />
        {/* <MainFooter /> */}
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
