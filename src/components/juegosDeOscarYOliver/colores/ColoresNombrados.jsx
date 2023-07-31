import React, { useState } from 'react';

function ColoresNombrados() {
  const [colorNamed, setColorNamed] = useState({ name: "OSCAR", img: "" });
  const [inputNamed, setInputNamed] = useState("");
  const [correct, setCorrect] = useState(false)
  const randomWords = [
    {
      name: "MARCEL",
      img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690844391/portfolio/oscaryoliver/familia/marcel_voajc5.jpg",
    },
    {
      name: "MARIO",
      img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690844391/portfolio/oscaryoliver/familia/mario_rn0udu.jpg",
    },
    {
      name: "DANIEL",
      img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690844391/portfolio/oscaryoliver/familia/daniel_rvaqd2.jpg",
    },
  ];
const randomBaloon=['https://res.cloudinary.com/dxnzcewsy/image/upload/v1690846527/portfolio/oscaryoliver/familia/pngwing.com_1_vff8bx.png',
'https://res.cloudinary.com/dxnzcewsy/image/upload/v1690846527/portfolio/oscaryoliver/familia/pngwing.com_1_vff8bx.png',
'https://res.cloudinary.com/dxnzcewsy/image/upload/v1690846527/portfolio/oscaryoliver/familia/pngwing.com_1_vff8bx.png',
'https://res.cloudinary.com/dxnzcewsy/image/upload/v1690846527/portfolio/oscaryoliver/familia/pngwing.com_1_vff8bx.png',
'https://res.cloudinary.com/dxnzcewsy/image/upload/v1690846527/portfolio/oscaryoliver/familia/pngwing.com_1_vff8bx.png',
'https://res.cloudinary.com/dxnzcewsy/image/upload/v1690846527/portfolio/oscaryoliver/familia/pngwing.com_1_vff8bx.png',
'https://res.cloudinary.com/dxnzcewsy/image/upload/v1690846527/portfolio/oscaryoliver/familia/pngwing.com_1_vff8bx.png']
const [baloons, setBaloons] = useState(randomBaloon);

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    const randomWord = randomWords[randomIndex];
    setColorNamed(randomWord);
  };
  const handleChange = (ev) => {
    setInputNamed(ev.target.value);
    console.log(ev.target.value);
    console.log(colorNamed.name)
    if(ev.target.value === colorNamed.name){
      setCorrect(true)
      setTimeout(() => {
        handleRandom()
        setCorrect(false)
        setInputNamed("");
      }, 1000);
    }
  };

  return (
    <div>
      <div className="colorNames">
        <div className="colorNames-example">
          <h1 onClick={handleRandom}>{colorNamed.name} </h1>
          <img src={colorNamed.img} alt={colorNamed.name} />
        </div>
        <div>
          <input type="text" value={inputNamed} onChange={handleChange} />
          <button onClick={()=>setInputNamed("")}>
            <i class="fa-solid fa-reply"></i>
          </button>
        </div>
          {baloons.map((baloon) =>(
            
          ))}
      </div>
    </div>
  );
}

export default ColoresNombrados;
