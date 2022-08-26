import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Pokemon from "./pages/Pokemon";
import PokemonDetails from "./pages/PokemonDetails";

import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  const createPokemonObj = (result) => {
    result.forEach(async (p) => {
      const respone = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${p.name}`
      );
      const { data } = respone;
      setPokemon((current) => [...current, data]);
    });
  };

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        createPokemonObj(res.data.results);
      });

    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setPokemon([]);
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setPokemon([]);
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Pokemon
              pokemon={pokemon}
              prevPageUrl={prevPageUrl}
              nextPageUrl={nextPageUrl}
              gotoNextPage={gotoNextPage}
              gotoPrevPage={gotoPrevPage}
            />
          }
        />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
