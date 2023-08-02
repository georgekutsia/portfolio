import axios from 'axios';
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';

function RickAndMortyNavbar() {

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