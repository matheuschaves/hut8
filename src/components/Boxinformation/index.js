import React from 'react'
import './styles.css';

function BoxInformation(props){
    return(
        <div className="BoxInformation">
            <div className="info">
            <h1>{leftPad(props.numero , 2)}</h1>
            <h2>{props.information}</h2>
        </div>
            <div className="foto">
                <img src={props.foto}/>
            </div>
        </div>
    )
}

function leftPad(value, totalWidth, paddingChar) {
    var length = totalWidth - value.toString().length + 1;
    return Array(length).join(paddingChar || '0') + value;
}

export default BoxInformation;