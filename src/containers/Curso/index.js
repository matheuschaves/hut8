import React, { useEffect, useState }from 'react'
import {useParams} from 'react-router-dom'
import {getPublicObjects} from '../../services/requests'
import ResumoCurso from '../../components/ResumoCurso'
import CourseInformation from '../../components/CourseInformation'
import Loader from '../../components/Loader'
import './styles.css';

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
                <ResumoCurso titulo={aluno[0].courses[Number(id)].course} subtitle={aluno[0].courses[Number(id)].class} />
                <CourseInformation titulo ="Próximas atividades" />
              
            </div>
            </>
            ) : (<Loader />)}
        </div>

    )
}

export default Curso; 