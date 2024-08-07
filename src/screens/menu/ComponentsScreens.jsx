import React, { useContext, useEffect, useState } from 'react'
import { CalculatorBody, CircularNavbar, Gallery1, Cart1, Colores, ColoresNombrados, Memory, Buttons, ImagesComp} from "../../components";
import Libreria1 from '../../components/librerias/Libreria1';
import List from '../../components/notes/note1/List';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import { GlobalContext } from '../../App';

function ComponentsScreens() {
  const [showNavbars, setShowNavbars] = useState(true)
  const { darkLightText, language } = useContext(GlobalContext);
  const [text, setText] = useState("Ocultar"); // Set initial text to Spanish

const [calculator, setCalculator] = useState(false)
const [gallery1, setGallery1] = useState(false)
const [libreria1, setLibreria1] = useState(false)
const [colores, setColores] = useState(false)
const [list, setList] = useState(false)
const [buttons, setButtons] = useState(true)
const [images, setImages] = useState(true)

const [coloresNombrados, setColoresNombrados] = useState(false)
const [memory, setMemory] = useState(false)

useEffect(() => {
  let newText;
  switch (language) {
    case "esp":
      newText = "Ocultar";
      break;
    case "eng":
      newText = "Hide";
      break;
    case "ger":
      newText = "Verkleidung";
      break;
    default:
      newText = "Ocultar"; // Default to Spanish
  }
  setText(newText);
}, [language]); 


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
const handleLibreria1 = ()=>{
  setLibreria1(!libreria1)
}
const handleColores = ()=>{
  setColores(!colores)
}
const handleColoresNombrados = ()=>{
  setColoresNombrados(!coloresNombrados)
}
const handleMemory = ()=>{
  setMemory(!memory);
}
const handleList = ()=>{
  setList(!list);
}
const handleButtons = ()=>{
  setButtons(!buttons)
}
const handleImages = ()=>{
  setImages(!images)
}

  return (
    <>
      <div className="game-screen-box">
    <button className='game-screen-box-buttonHide' onClick={()=> {setShowNavbars(!showNavbars)}}> {showNavbars ? <i class="fa-solid fa-circle-minus"></i> : <i class="fa-solid fa-circle-plus"></i>}</button>
    {showNavbars && 
    <>
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
          aosDelay={"100"}
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
          aosDelay={"200"}

        />
        <CircularNavbar
          text={"Peaces"}
          handleGallery1={handleGallery1}
          handleCalculator={handleCalculator}
          handleLibreria1={handleLibreria1}
          handleList1={handleList}
          handleButtons1={handleButtons}
          handleImages1={handleImages}
          item1={"calculator"}
          item2={"palette"}
          item3={"calendar"}
          item4={"bomb"}
          item5={"toggle-on"}
          item6={"images"}
          item7={"globe"}
          item8={"crown"}
          item9={"toolbox"}
          aosDelay={"300"}

        />
        <CircularNavbar
          text={"Oscar"}
          handle8={handleColores}
          handle7={handleColoresNombrados}
          handle6={handleMemory}
          item1={"calculator"}
          item2={"palette"}
          item3={"calendar"}
          item4={"bomb"}
          item5={"ghost"}
          item6={"gears"}
          item7={"globe"}
          item8={"rainbow"}
          item9={"face-grin-beam"}
          aosDelay={"400"}
        />
    </>
    }
      </div>
      <div>
        {calculator && (
          <div className="calculatorScreen">
            <CalculatorBody  closeComponent={handleCalculator}/>
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
            <Libreria1 closeComponent={setLibreria1}/>
          </div>
        )}
      </div>
      <div>
        {colores && (
          <div className="">
            <Colores closeComponent={handleColores}/>
          </div>
        )}
      </div>
      <div>
        {coloresNombrados && (
          <div className="">
            <ColoresNombrados  closeComponent={handleColoresNombrados}/>
          </div>
        )}
      </div>
      <div>
        {memory && (
          <div className="">
            <Memory closeComponent={handleMemory}/>
          </div>
        )}
      </div>
      <div>
        {list && (
          <div className="">
          <List closeComponent={handleList}/>
          </div>
        )}
      </div>
      <div>
        {buttons && 
          <Buttons closeComponent={handleButtons}/>
        }
      </div>
      <div>
        {images && 
        <ImagesComp/>
        }
      </div>
    </>
  );
}

export default ComponentsScreens