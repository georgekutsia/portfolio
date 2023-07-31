import { Route, Routes } from "react-router-dom";
import {CornerNavbar } from "./components";
import { GameScreens, Myself } from "./screens";

function App() {
  return (
    <div className="app">
    <CornerNavbar/>
      <Routes>
        <Route path="/games" element={<GameScreens />} />
        <Route path="/myself" element={<Myself />} />
      </Routes>
    </div>
  );
}

export default App;
