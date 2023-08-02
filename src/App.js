import { Route, Routes } from "react-router-dom";
import {CornerNavbar, MainFooter } from "./components";
import { CharactersPage, ContactPage, GameScreens, HomePage, MainRickAndMortyPage, Myself, RickAndMortyNavbar } from "./screens";

function App() {
  return (
    <div className="app ">
      <RickAndMortyNavbar />
      <CornerNavbar />
      <Routes>
        <Route path="/games" element={<GameScreens />} />
        <Route path="/myself" element={<Myself />} />
        <Route path="/rickandmorty/home-page" element={<HomePage />} />
        <Route path="/rickandmorty/characters-page" element={<CharactersPage />} />
        <Route path="/rickandmorty/characters-page/:id" element={<ContactPage />} />
      </Routes>
      <MainFooter />
    </div>
  );
}

export default App;
