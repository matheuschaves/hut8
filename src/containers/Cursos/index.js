import React, { useEffect, useState }from 'react'
import './styles.css';
import Curses from '../../components/Curses'


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