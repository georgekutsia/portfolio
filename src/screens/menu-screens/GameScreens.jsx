import React, { useState } from 'react'
import {CalculatorBody, CircularNavbar} from "../../components"
function GameScreens() {
const [calculator, setCalculator] = useState(false)

const handleCalculator = ()=>{
  setCalculator(!calculator)
}
const handleBulala = ()=>{
  console.log("bulala")
}

  return (
    <>
      <div className="game-screen-box">
        <CircularNavbar
          text={"juegos"}
          handleCalculator={handleCalculator}
          item1={"calculator"}
          item2={"palette"}
          item3={"bomb"}
          item4={"calendar"}
          item5={"ghost"}
          item6={"gears"}
          item7={"parachute-box"}
          item8={"crown"}
          item9={"gamepad"}
          backColor={"rgb(216, 101, 0)"}
        />
        <CircularNavbar
          text={"páginas"}
          handleCalculator={handleBulala}
          item1={"infinity"}
          item2={"palette"}
          item3={"bomb"}
          item4={"calendar"}
          item5={"ghost"}
          item6={"gears"}
          item7={"globe"}
          item8={"crown"}
          item9={"globe"}
          backColor={"rgb(216, 101, 0)"}
        />
        <CircularNavbar
          text={"útiles"}
          handleCalculator={handleCalculator}
          item1={"calculator"}
          item2={"palette"}
          item3={"bomb"}
          item4={"calendar"}
          item5={"ghost"}
          item6={"gears"}
          item7={"globe"}
          item8={"crown"}
          item9={"toolbox"}
          backColor={"rgb(216, 101, 0)"}
        />
      </div>
      <div>
        {calculator && (
          <div className="calculatorScreen">
            <CalculatorBody />
          </div>
        )}
      </div>
    </>
  );
}

export default GameScreens