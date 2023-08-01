import axios from 'axios';
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';

function RickAndMortyNavbar() {

    // useEffect(()=>{
    //   async function getCharacters(){
    //   const {data} = await axios("https://rickandmortyapi.com/api/character");
    //   console.log(data)
    //   }
    //   getCharacters()
    // },[])

  return (
    <div className="rickandmorty-box">
      <NavLink className={({ isActive, isPending }) => 
      isPending ? "pending" : isActive ? "fa-bounce rickandmorty-box-navlink" : "rickandmorty-box-navlink"} 
      to="/rickandmorty/home-page">Home</NavLink>
      <NavLink className={({ isActive, isPending }) => 
      isPending ? "pending" : isActive ? "fa-bounce rickandmorty-box-navlink" : "rickandmorty-box-navlink"} 
      to="/rickandmorty/characters-page">Characters</NavLink>
      <NavLink className={({ isActive, isPending }) => 
      isPending ? "pending" : isActive ? "fa-bounce rickandmorty-box-navlink" : "rickandmorty-box-navlink"} 
      to="/rickandmorty/contact-page">Contact</NavLink>
    </div>
  );
}

export default RickAndMortyNavbar