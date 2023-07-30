import { Route, Routes } from "react-router-dom";
import { CalculatorBody, CircularNavbar, CornerNavbar } from "./components";

function App() {
  return (
    <div className="app">
    <CornerNavbar/>
      <Routes>
        <Route path="/games" element={<CircularNavbar text={"juegos"} />} />
        <Route path="/calculator" element={<CalculatorBody />} />
      </Routes>
    </div>
  );
}

export default App;
