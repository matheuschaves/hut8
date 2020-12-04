import React from 'react'
import './styles.css';





function BoxProf(props){
    return (
        
        <div className="BoxProf">
            <div className="ProfFoto">
                <img src={props.foto} />
            </div>
            <div className="infosProf">
                <h1>{props.nome}</h1>
                <h2>{props.funcao}</h2>
            </div>

        </div>

    )
}

export default BoxProf;