import React from 'react'
import './styles.css';

function Menu(props){

    return (
        <div className="Menu">
           <h1>{props.nome}</h1>
            {/* Colocar route usando props.route */}
        </div>

    )
}

export default Menu;