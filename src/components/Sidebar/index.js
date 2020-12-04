import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import Usuario from '../Usuario'
import Menu from '../Menu'
import './styles.css';

function Sidebar(props){
    const location = useLocation().pathname;

    return (
        <div className="Princiapl">
            <Usuario nome={props.name}  curso={props.curso} />  
            <div >
                {location == "/" ? 
                    <div className="Paginas">
                        <Link to="/" className="navLink"><Menu nome="DashBoard" set="s"/></Link>
                        <Link to="/Cursos" className="navLink"><Menu nome="Meus Cursos" set=""/></Link>
                    </div>
                :   <div className="Paginas"> 
                        <Link to="/" className="navLink"><Menu nome="DashBoard" set=""/></Link>
                        <Link to="/Cursos" className="navLink"><Menu nome="Meus Cursos"set="s"/></Link>
                    </div>}
            </div>
        </div>
    )
}

export default Sidebar;