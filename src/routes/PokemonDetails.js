import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export function PokemonDetails(props) {
    const [pokemon, setPokemon] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
        .then((res) => res.json())
        .then((data) => {
            setPokemon(data);
        })
    }, [])
    
    if(!pokemon) {
        return <>Loading...</>;
    }
    const pokemonAbilities = pokemon.abilities;
    const abilitiesMapping = pokemonAbilities.map((ability) => <li>{ability.ability.name}</li>);



    const pokemonTypes = pokemon.types;
    const typesMapping = pokemonTypes.map((type) => <li>{type.type.name}</li>);
    
    const pokemonStats = pokemon.stats;
    const statsMapping = pokemonStats.map((stat) => <li>{stat.stat.name}</li>);

    return (
        <>
         <Card style={{ width: '18rem' }} className='mx-auto'>
      <Card.Img
        width='286'
        height='286'
        bg='dark'
        variant='top'
        src={pokemon?.sprites.front_default}
      />
      <Card.Body>
      <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text as='div'>
          
                <ul>
                <li>height: {pokemon.height}</li>
                <li>weight: {pokemon.weight}</li>
                <li>abilities: <ul>{abilitiesMapping}</ul> </li>
                <li>types: <ul>{typesMapping}</ul></li>
                <li>stats:<ul>{statsMapping}</ul></li>
           
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
            
        </>
    )
}
