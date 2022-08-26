import React from "react";

export default function Details({ pokemon }) {
  return (
    <div className="pokemon-details">
      <div className="space-top"></div>
      <div className="pokemon-image">
        <img
          src={pokemon?.sprites?.other?.dream_world?.front_default}
          alt={`${pokemon.name}_logo`}
        />
      </div>
      <div className="pokemon-text">
        <div className="inner-text">
          <h2>{pokemon.name}</h2>
          <div className="pokemon-type">
            {pokemon?.types?.map((el) => (
              <p key={el.type.name}>{el.type.name}</p>
            ))}
          </div>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>XP: {pokemon.base_experience}</p>
        </div>
        <div className="inner-text">
          {pokemon?.stats?.map((el) => (
            <div className="pokemon-stats">
              <p>
                {el.stat.name}: {el.base_stat}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="more-images">
          
      </div>
    </div>
  );
}
