import React from 'react'
import './styles.css';
import Resumo from '../Resumo'
import Cursos from '../Cursos'

function Conteudo(props){

    return (
        <div className="Conteudo">
           <Resumo />
           <Cursos />
        </div>

    )
}

export default Conteudo;