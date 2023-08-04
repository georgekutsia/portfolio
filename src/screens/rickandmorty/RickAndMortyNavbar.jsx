import React from 'react'
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
      to="/rickandmorty/favorites">Favorites</NavLink>
      <NavLink className={({ isActive, isPending }) => 
      isPending ? "pending" : isActive ? "fa-bounce rickandmorty-box-navlink" : "rickandmorty-box-navlink"} 
      to="/rickandmorty/homePage">Creating form</NavLink>
      <NavLink className={({ isActive, isPending }) => 
      isPending ? "pending" : isActive ? "fa-bounce rickandmorty-box-navlink" : "rickandmorty-box-navlink"} 
      to="/rickandmorty/allChars">All charaacters</NavLink>
    </div>
  );
}

export default RickAndMortyNavbar