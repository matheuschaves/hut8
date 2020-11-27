import React from 'react'
import './styles.css';
import Image from '../../assets/fausto.jpg'

function Usuario(props){
    return (
            <div className="Usuario">
                <img src={Image} className="UsuarioFoto"></img>
                <div className="UsuarioDados">
                    <h1 className="UsuarioDados">{props.nome}</h1>
                    <h2 className="UsuarioDados">{props.curso}</h2>
                </div>
            </div>    
    )
}

export default Usuario;