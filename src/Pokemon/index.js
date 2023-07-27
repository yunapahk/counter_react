import { useState } from 'react';

const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([
        { pokemonName: 'Pikachu' },
        { pokemonName: 'Charmander' },
        { pokemonName: 'Squirtle' },
    ]);

    function handleAddToStart() {
        const newPokemon = { pokemonName: 'Bulbasaur' }; 
        setPokemons([newPokemon, ...pokemons]);
    }

    function handleAddToEnd() {
        const newPokemon = { pokemonName: 'Jigglypuff' };
        setPokemons([...pokemons, newPokemon]);
    }

    function handleDeleteFromStart() {
        const newPokemons = [...pokemons];
        newPokemons.shift();
        setPokemons(newPokemons);
    }

    function handleDeleteFromEnd() {
        const newPokemons = [...pokemons];
        newPokemons.pop();
        setPokemons(newPokemons);
    }

    return (
        <div style={{ backgroundColor: 'whitesmoke' }}>
            <h6>{props.title}</h6>

            <div>
                {pokemons.map((pokemon, index) => {
                    return <li key={index}>{pokemon.pokemonName}</li>;
                })}
            </div>
            <br />
            <button onClick={handleAddToStart}>Add Start</button>
            <button onClick={handleDeleteFromStart}>Delete Start</button>

            <button onClick={handleAddToEnd}>Add End</button>
            <button onClick={handleDeleteFromEnd}>Delete End</button>
        </div>
    );
};

export default Pokemon;
