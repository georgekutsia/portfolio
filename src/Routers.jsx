import React from 'react'
import { Route, Routes } from "react-router-dom";
import { CharactersPage, ContactPage, AllApis, ComponentsScreens, Profile, RickAndMortyAllCharacters, RickAndMortyFavorites, RickAndMortyH, ComponentsScreensomePage, RickAndMortyHomePage } from "./screens";

function Routers() {
  return (
    <div>
        <Routes>
          <Route path="/components" element={<ComponentsScreens />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/apis" element={<AllApis/>} />
          <Route path="/rickandmorty/characters-page" element={<CharactersPage />}/>
          <Route path="/rickandmorty/characters-page/:id" element={<ContactPage />}/>
          <Route path="/rickandmorty/favorites" element={<RickAndMortyFavorites />}/>
          <Route path="/rickandmorty/homePage" element={<RickAndMortyHomePage/>}/>
          <Route path="/rickandmorty/allChars" element={<RickAndMortyAllCharacters />}/>
        </Routes>
    </div>
  )
}

export default Routers