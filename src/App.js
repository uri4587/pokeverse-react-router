import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { PokemonDetails } from './routes/PokemonDetails';
import {Home} from './routes/Home';



function App() {
  const [pokemonList, setPokemonList] = useState([]);
  

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <BrowserRouter>
      <div data-testid="app">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home pokemonList={pokemonList}/>}/>
          <Route path='/:name' element={<PokemonDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export { App };
