import React from 'react'
import './styles.css';



function BoxLinkWPhoto(props){

    return (
        <div className="BoxLinkWPhoto">
            <img src={props.foto} className="LogoCurso"></img>
            <h2>{props.typeCourse}</h2>
            <h1>{props.name}</h1>
            <h3>{props.turma}</h3>
        </div>

    )
}


export default BoxLinkWPhoto;