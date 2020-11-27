import React from 'react'
import Usuario from '../Usuario'
import Menu from '../Menu'
import './styles.css';

function Sidebar(props){
    return (
        <div className="Princiapl">
            <Usuario nome={props.name}  curso={props.curso} />
            <div className="Paginas">
                <ul className="Menu">
                    <li><h1 onClick=''>DashBoard</h1></li>
                    <li><h1 onClick=''>Meus Cursos</h1></li>
                </ul>
            </div>
        </div>

    )
}

export default Sidebar;