"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface PokemonList {
  count: number;
  next: string;
  previous?: any;
  results: Pokemon[];
}

interface Pokemon {
  name: string;
  url: string;
}

export default function Page() {
  const [pokemonData, setPokemonData] = useState<PokemonList>({} as PokemonList);

  useEffect(() => {
    const getData = async () => {
      try {
        // Using the static JSON data instead of fetching from API
        const data = {
          count: 1302,
          next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
          previous: null,
          results: [
            { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
            { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
            { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
            { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
            { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
            { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
            { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
            { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
            { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
            { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
            { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/" },
            { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/" },
            { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/" },
            { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/" },
            { name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/" },
            { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/" },
            { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/" },
            { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/" },
            { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/" },
            { name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/" },
          ],
        };
        setPokemonData(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  const DisplayPokemonList = () => {
    if (pokemonData.results) {
      return (
        <ul>
          {pokemonData.results.map((p) => (
            <li key={p.name}>
              <Link href={`/pokemon/${p.name}`}>{p.name}</Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <>
      <h1>Pokemon List</h1>
      <DisplayPokemonList />
    </>
  );
}
