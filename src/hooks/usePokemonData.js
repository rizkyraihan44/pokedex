import { useEffect, useRef, useState } from 'react';
import { getPokedexNumber } from '../utils';

const usePokemonData = (selectedPokemon) => {
    const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(false);
    const loading = useRef(false);

    useEffect(() => {
        if (loading.current || !localStorage) return;

        let cache = {};
        if (localStorage.getItem('pokedex')) {
            cache = JSON.parse(localStorage.getItem('pokedex'));
        }

        if (selectedPokemon in cache) {
            setData(cache[selectedPokemon]);
            return;
        }

        async function fetchPokemonData() {
            loading.current = true;
            try {
                const baseUrl = `https://pokeapi.co/api/v2/`;
                const suffix = `pokemon/${getPokedexNumber(selectedPokemon)}`;
                const url = baseUrl + suffix;
                const response = await fetch(url);
                const pokemonData = await response.json();
                setData(pokemonData);

                cache[selectedPokemon] = pokemonData;
                localStorage.setItem('pokedex', JSON.stringify(cache));
            } catch (error) {
                console.log(error.message);
            } finally {
                loading.current = false;
            }
        }
        fetchPokemonData();
    }, [selectedPokemon]);

    return { data, loading: loading.current };
};

export default usePokemonData;
