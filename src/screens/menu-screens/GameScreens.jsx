import React, { useState } from 'react'
import { CalculatorBody, CircularNavbar, Gallery1, Cart1, Colores, ColoresNombrados } from "../../components";
import Libreria1 from '../../components/librerias/Libreria1';
function GameScreens() {
const [calculator, setCalculator] = useState(false)
const [gallery1, setGallery1] = useState(false)
const [libreria1, setLibreria1] = useState(false)
const [colores, setColores] = useState(false)
const [coloresNombrados, setColoresNombrados] = useState(true)
  const products = [
    {
      name: "Remmant 2",
      img: "https://gaming-cdn.com/images/products/13288/380x218/remnant-2-pc-juego-steam-cover.jpg",
      count: 0,
    },
    {
      name: "Only up",
      img: "https://gaming-cdn.com/images/products/14453/380x218/only-up-pc-juego-steam-cover.jpg",
      count: 0,
    },
    {
      name: "Ratchet and clank",
      img: "https://gaming-cdn.com/images/products/9665/380x218/ratchet-clank-rift-apart-pc-juego-steam-europe-cover.jpg",
      count: 0,
    },
  ];

  const [prods, setProducts] = useState(products)
  const [showCart, setShowCart] = useState(false)
const handleCalculator = ()=>{
  setCalculator(!calculator)
}
const handleGallery1 = ()=>{
  setGallery1(!gallery1)
}
const handleBulala = ()=>{
}
const handleLibreria1 = ()=>{
  setLibreria1(!libreria1)
}
const handleColores = ()=>{
  setColores(!colores)
}
const handleColoresNombrados = ()=>{
  setColoresNombrados(!coloresNombrados)
}

  return (
    <>
      <div className="game-screen-box">
        <CircularNavbar
          text={"juegos"}
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
          href1={"https://guide-dongions.netlify.app/"}
          item1={"dice-d20"}
          item2={"palette"}
          item3={"bomb"}
          item4={"calendar"}
          item5={"ghost"}
          item6={"gears"}
          item7={"infinity"}
          item8={"crown"}
          item9={"globe"}
          backColor={"rgb(216, 101, 0)"}
        />
        <CircularNavbar
          text={"útiles"}
          handleGallery1={handleGallery1}
          handleCalculator={handleCalculator}
          handleLibreria1={handleLibreria1}
          item1={"calculator"}
          item2={"palette"}
          item3={"calendar"}
          item4={"bomb"}
          item5={"ghost"}
          item6={"gears"}
          item7={"globe"}
          item8={"crown"}
          item9={"toolbox"}
          backColor={"rgb(216, 101, 0)"}
        />
        <CircularNavbar
          text={"Oscar"}
          handle8={handleColores}
          handle7={handleColoresNombrados}
          item1={"calculator"}
          item2={"palette"}
          item3={"calendar"}
          item4={"bomb"}
          item5={"ghost"}
          item6={"gears"}
          item7={"globe"}
          item8={"rainbow"}
          item9={"face-grin-beam"}
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
      <div>
        {gallery1 && (
          <div className="calculatorScreen">
            <Gallery1 setProducts={setProducts} products={prods} />
            <Cart1 show={showCart} setShow={setShowCart} />
          </div>
        )}
      </div>
      <div>
        {libreria1 && (
          <div className="calculatorScreen">
            <Libreria1 />
          </div>
        )}
      </div>
      <div>
        {colores && (
          <div className="">
            <Colores />
          </div>
        )}
      </div>
      <div>
        {coloresNombrados && (
          <div className="">
            <ColoresNombrados />
          </div>
        )}
      </div>
    </>
  );
}

export default GameScreens