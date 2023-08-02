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
      name: "DANI",
      img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690844391/portfolio/oscaryoliver/familia/daniel_rvaqd2.jpg",
    },
    {
      name: "EVEREST",
      img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850243/portfolio/oscaryoliver/familia/pngwing.com_19_wvr0lb.png",
    },
    {
      name: "MARSHAL",
      img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850243/portfolio/oscaryoliver/familia/pngwing.com_17_gybgh5.png",
    },
    {
      name: "CHASE",
      img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850243/portfolio/oscaryoliver/familia/pngwing.com_20_bwruhp.png",
    },
    {
      name: "RUBBLE",
      img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850243/portfolio/oscaryoliver/familia/pngwing.com_18_omew5q.png",
    },
    {
      name: "ZUMA",
      img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850246/portfolio/oscaryoliver/familia/pngwing.com_22_lqnz1l.png",
    },
    {
      name: "ROCKY",
      img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850246/portfolio/oscaryoliver/familia/pngwing.com_23_pxtdh8.png",
    },
    {
      name: "RIDER",
      img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850246/portfolio/oscaryoliver/familia/pngwing.com_16_whsthj.png",
    },
    {
      name: "SKY",
      img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850464/portfolio/oscaryoliver/familia/pngwing.com_21_otfofg.png",
    },
  ];
const randomBaloon = [
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690846527/portfolio/oscaryoliver/familia/pngwing.com_1_vff8bx.png",
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690849411/portfolio/oscaryoliver/familia/pngwing.com_13_pbxi55.png",
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690849411/portfolio/oscaryoliver/familia/pngwing.com_2_lmebsq.png",
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690849412/portfolio/oscaryoliver/familia/pngwing.com_3_oqll6p.png",
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690849412/portfolio/oscaryoliver/familia/pngwing.com_14_cq6kaa.png",
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690849417/portfolio/oscaryoliver/familia/pngwing.com_8_jv5hly.png",
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690849417/portfolio/oscaryoliver/familia/pngwing.com_12_p3hnpq.png",
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690849417/portfolio/oscaryoliver/familia/pngwing.com_10_nqg2fz.png",
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690849417/portfolio/oscaryoliver/familia/pngwing.com_11_ih5ekj.png",
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690849417/portfolio/oscaryoliver/familia/pngwing.com_6_tgbk1q.png",
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690849937/portfolio/oscaryoliver/familia/pngwing.com_15_xzarwt.png",
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690849929/portfolio/oscaryoliver/familia/pngwing.com_26_ljxfju.png",
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690849929/portfolio/oscaryoliver/familia/pngwing.com_24_oqjwc5.png",
  "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690849929/portfolio/oscaryoliver/familia/pngwing.com_25_js0o0b.png",
];
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

    if(ev.target.value === colorNamed.name[0]){
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
          <h1 onClick={handleRandom}> <span className="big-first-letter">{colorNamed.name.charAt(0)}</span> {colorNamed.name.substring(1)}</h1>
          <img src={colorNamed.img} alt={colorNamed.name} />
        </div>
        <div>
          <input type="text" value={inputNamed} onChange={handleChange} />
          <button onClick={() => setInputNamed("")}>
            <i className="fa-solid fa-reply"></i>
          </button>
        </div>
        {correct &&
        <div className="colorNames-circles">
                <audio autoPlay>
        <source src="./trumpets-party.mp3" type="audio/mp3" />
      </audio>
          {baloons.map((baloon, index) => (
            <img className="colorNames-circles-circle" src={baloon} alt={baloon} key={index} />
          ))}

        </div>
        }
      </div>
    </div>
  );
}

export default ColoresNombrados;
