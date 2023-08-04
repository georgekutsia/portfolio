import React, { useEffect, useState } from "react";
import data from "../../../data/family.data";

let count = 0


function Memory() {
  const [planets, setPlanets] = useState([]);
  const [planetOne, setPlanetOne] = useState({});
  const [planetTwo, setPlanetTwo] = useState({});
  const [finished, setFinished] = useState({});

  const checkMatch = (planet) => {
    if (planetOne.id) {
      setPlanetTwo(planet);
      checkPj(planetOne, planet);
    } else {
      setPlanetOne(planet);
    }
  };

  const checkPj = (planetOne, planetTwo) => {
    setTimeout(() => {
      count++
      if (planetOne.img === planetTwo.img) {
        const modifiedPlanets = planets.map((planet) =>
          planet.img === planetOne.img ? { ...planet, matched: true } : planet
        );
        setPlanets(modifiedPlanets);
        console.log(modifiedPlanets);
      }
      setPlanetOne({});
      setPlanetTwo({});
    }, 500);
  };
    useEffect(()=>{
      setPlanets(data.sort(()=>0.5-Math.random()))
    },[])
  return (
    <div className="memoryGame">
      {planets.map((planet) => (
        <div className="memoryGame-img" key={planet.id}>
          {(planetOne.id === planet.id || planetTwo.id === planet.id) && ( <img height="100px" src={planet.img} alt={"Front" + planet.name} />)}
          {planet.matched && ( <img width="100px" src={planet.winImg} alt={"Back" + planet.name} />)}
          {!(planetOne.id === planet.id || planetTwo.id === planet.id || planet.matched) && ( <img height="100px" src={planet.backImg} alt={"Win" + planet.name}  onClick={() => checkMatch(planet)}/>)}
        </div>
      ))}
    </div>
  );
}

export default Memory;
