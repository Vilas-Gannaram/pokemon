import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Details from "../components/Details";

export default function PokemonDetails() {
  const [pokemon, setPokemon] = useState();
  const { name } = useParams();

  useEffect(() => {
    const identifier = setTimeout(async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const { data } = response;
      setPokemon(data);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, []);
  return (
    <>
      <Header />
      <main className="main_container">
        {pokemon && <Details pokemon={pokemon} />}
      </main>
      <Footer />
    </>
  );
}
