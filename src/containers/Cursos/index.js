import React, { useEffect, useState }from 'react'
import Curses from '../../components/Curses'
import './styles.css';


function Cursos(){
    return (
        <div className="Cursos">  
            <div className="Conteudo">
               <Curses titulo ="Meus Cursos" />
            </div>
        </div>
    )
}

export default Cursos; 