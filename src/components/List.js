import { Link } from "react-router-dom";

const List = ({ pokemon }) => {
  return (
    <div className="pokemon-list">
      {pokemon.map((pokemon) => (
        <Link
          target="_blank"
          className="card"
          to={`/pokemon/${pokemon.name}`}
          key={pokemon}
        >
          <div className="image">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={`${pokemon.name}.logo`}
            />
          </div>
          <h2>{pokemon.name}</h2>
          <div className="details">
            <p>
              Height: <span>{pokemon.height}</span>
            </p>
            <p>
              weight: <span>{pokemon.weight}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
