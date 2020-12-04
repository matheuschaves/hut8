import React from 'react'
import './styles.css';

function Menu(props){

    return (
        <div className="Menu">
            {props.set == "s" ? 
                <div>
                    <h1 className="set">{props.nome}</h1>
                </div>
            :   <div>
                    <h1>{props.nome}</h1>
                </div>
            }
        </div>
    )
}

export default Menu;