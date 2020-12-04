import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getPublicObjects} from '../../services/requests'
import BoxInformation from '../Boxinformation'
import BoxProf from '../BoxProf'
import Loader from '../Loader'
import graduationCap from '../../assets/graduation-cap-solid.svg'
import tasks from '../../assets/tasks-solid.svg'
import userGraduate from '../../assets/user-graduate-solid.svg'
import './styles.css';

function ResumoCurso(props){
    const [aluno,setAluno] = useState(null)
    const {id} = useParams();
    
    useEffect(() => {
        getPublicObjects()
        .then(res => {
            setAluno(res.data)
        })
    },[])

    return (         
        <div className="Resumo">
        {aluno ? (
            <div>
                <div className="Header">
                    <div>
                    <h1>{props.titulo}</h1>
                    <h2>{props.subtitle}</h2>
                    </div>
                    <div className="infProf">
                        <BoxProf  nome={aluno[0].courses[0].teacher.name} foto={aluno[0].courses[0].teacher.avatar} funcao="Professor responsável"/> 
                    </div>
                </div>
                <div className="BoxInfo">
                    <BoxInformation numero={aluno[0].courses[Number(id)].overview.nextActivities} information="Atividades próximas" foto={tasks}/>
                    <BoxInformation numero={aluno[0].courses[Number(id)].overview.credits} information="Créditos" foto={graduationCap}/>
                    <BoxInformation numero={aluno[0].courses[Number(id)].overview.enrolledStudents} information="Alunos matriculados" foto={userGraduate}/>
                </div>
            </div>) :(
                <Loader />
            )}
        </div>
    )
}

export default ResumoCurso;