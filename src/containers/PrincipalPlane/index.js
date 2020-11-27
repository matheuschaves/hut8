import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
/* import Conteudo from '../../components/Conteudo'; */
import './styles.css';
import {getPublicObjects} from '../../services/requests'



function PrincipalPlane(){
    const [aluno,setAluno] = useState({
        loading: true,
        alunos: ["name": "", "course": ""]

    })

    

    useEffect(() => {
        getPublicObjects()
        .then(res => {
            setAluno({
                loading: false,
                alunos: res.data
            })
        })


    })

     console.log(aluno.alunos)  

    return (
        <div  className="DashBoard">
            <div className="Sidebar">
            {/*<Sidebar name={getPublicObjects.name}/>*/}
            <Sidebar name = {aluno.alunos[0].name} curso = {aluno.alunos[0].course}/>
            </div>
            <div className="Conteudo">
            {/* <Conteudo /> */}
            </div>

        </div>
    )
}

export default PrincipalPlane;