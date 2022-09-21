import React from 'react'
import { UseFetch } from '../UseFetch'

export const CardPokemon = ({url}) => {
    const estado = UseFetch(url)
    const {cargando, data}=estado
    

  return (
    <div>
        {
            cargando 
            ? 
            <h1>Cargando</h1> 
            :
            <div className="card" style={{width:'14rem'}}>
                <div className="card-header">
                    <h5 className='card-title'>{data.id}</h5>
                </div>
                <div className="card-body">
                    <img src={data.sprites.front_default} alt="pokemon" />
                </div>
                <div className="card-footer">
                    <p className='card-text text-capitalize'>{data.forms[0].name}</p>
                </div>
            </div>
        }
    </div>
  )
}

export default CardPokemon