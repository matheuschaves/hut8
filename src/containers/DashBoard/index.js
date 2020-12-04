import React from 'react';
import Resumo from '../../components/Resumo'
import NextActivities from '../../components/NextActivities'
import './styles.css';

function DashBoard(){
    return (
        <div  className="DashBoard">           
            <div className="Conteudo">
               <Resumo titulo="Resumo" subtitle=""/> 
               <NextActivities titulo="Proximas Atividades" />
            </div>
        </div>
    )
}

export default DashBoard;
