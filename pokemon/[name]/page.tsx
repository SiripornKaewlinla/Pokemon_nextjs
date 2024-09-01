"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface PokemonDetail {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
}

export default function Page() {
  const { name } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof name === "string") {
      const fetchPokemonDetail = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result: PokemonDetail = await response.json();
          setPokemonDetail(result);
        } catch (error) {
          setError(`Failed to fetch Pokémon details: ${error}`);
        }
      };
      fetchPokemonDetail();
    }
  }, [name]);

  if (!name) return <p>Invalid Pokémon name.</p>;
  if (error) return <p>{error}</p>;
  if (!pokemonDetail) return <p>Loading...</p>;

  return (
    <>
      <h1>{pokemonDetail.name}</h1>
      <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} />
      <h2>Abilities</h2>
      <ul>
        {pokemonDetail.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2>Types</h2>
      <ul>
        {pokemonDetail.types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
      <Link href="/pokemon">Back to Pokémon List</Link>
    </>
  );
}

