import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PokemonCard() {

  const [pokemon, setPokemon] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getRandomPokemon = async () => {
      const id = Math.floor(Math.random() * 1017) + 1;
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const res = await axios.get(url);
      setPokemon(res.data);
      setCounter(id);
    };

    getRandomPokemon();
  }, []);

  const Siguiente = () => {
    if (counter < 1017) {
      setCounter(counter + 1);
      axios.get(`https://pokeapi.co/api/v2/pokemon/${counter+1}`)
        .then(res => setPokemon(res.data));

    }
  }

  const Aleatorio = () => {
    const id = Math.floor(Math.random() * 1017) + 1;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemon(res.data));
      setCounter(id);
  }

  const Reiniciar = () => {
    setCounter(1);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${counter}`)
      .then(res => setPokemon(res.data));
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      {pokemon && (
        <>
          <img
            className="w-32 h-32 mx-auto mb-4"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <h2 className="text-xl font-bold capitalize text-center">#{pokemon.id} - {pokemon.name}</h2>

          <p className="mt-4 text-gray-700">Tipos:</p>
          <ul className="flex justify-center gap-2 flex-wrap">
            {pokemon.types.map(type => (
              <li key={type.type.name}
                className="text-sm capitalize px-4 py-1 rounded-full bg-gray-200 text-gray-700"
              >
                {type.type.name}
              </li>
            ))}
          </ul>

        </>
      )}

      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={Siguiente}>Siguiente</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={Aleatorio} >Aleatorio</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={Reiniciar} >Reiniciar</button>
      </div>

    </div>
  );
}