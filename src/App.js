import Routers from "./Routers";
import { AllNavbars, CornerNavbar, MainFooter } from "./components";
import React, { useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import rickFavoriteData from "./data/rickfavorite.data";
export const GlobalContext = React.createContext();

function App() {

  const [favorites, setFavorites] = useState(rickFavoriteData);
  return (
    <PrimeReactProvider>
      <GlobalContext.Provider value={{ favorites, setFavorites }}>
        <div className="app ">
          <CornerNavbar />
          <Routers />
          {/* <MainFooter /> */}
        </div>
      </GlobalContext.Provider>
    </PrimeReactProvider>
  );
}

export default App;
