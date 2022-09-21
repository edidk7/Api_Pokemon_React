import React from 'react'
import CardPokemon from './CardPokemon'

import './Cards.css'

export const Cards = ({results}) => {
  return (
    <div className='container'>
        <ul className='cards'>
            {
                results.map( p=>(
                    <li className='card-item' key={p.name}>
                        <CardPokemon url={p.url}/>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Cards