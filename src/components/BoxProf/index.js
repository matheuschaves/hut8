import React from 'react'
import './styles.css';





function BoxProf(props){
    return (
        
        <div className="BoxProf">
            <img src={props.foto}/>
            <h1>{props.nome}</h1>
            <h2>{props.funcao}</h2>

        </div>

    )
}

export default BoxProf;