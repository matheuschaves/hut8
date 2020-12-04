import React, { useEffect, useState }from 'react'
import './styles.css';
import {getPublicObjects} from '../../services/requests'
import Resumo from '../../components/Resumo'
import CourseInformation from '../../components/CourseInformation'
import {useParams} from 'react-router-dom'

function Curso(){
    const [aluno,setAluno] = useState(null)
    const {id} = useParams();
    

    useEffect(() => {
        getPublicObjects()
        .then(res => {
            setAluno(res.data)
        })
    },[])

    return (
        <div className="Cursos">  
           {aluno ? (
            <>
            <div className="Conteudo">
                <Resumo titulo={aluno[0].courses[Number(id)].course} subtitle={aluno[0].courses[Number(id)].class} />
                <CourseInformation titulo ="Próximas atividades" />
              
            </div>
            </>
            ) : (<p> Carregando </p>)}
        </div>

    )
}

export default Curso; 