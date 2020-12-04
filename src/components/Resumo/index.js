import React, {useState, useEffect} from 'react'
import './styles.css';
import graduationCap from '../../assets/graduation-cap-solid.svg'
import tasks from '../../assets/tasks-solid.svg'
import userGraduate from '../../assets/user-graduate-solid.svg'
import BoxInformation from '../Boxinformation'
import {getPublicObjects} from '../../services/requests'
import BoxProf from '../BoxProf'



function Resumo(props){
    const [aluno,setAluno] = useState(null)

    

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
                   {/*  <BoxProf  nome={aluno[0].courses[0].teacher.name} foto={aluno[0].courses[0].teacher.avatar} funcao="Professor responsável"/> */}
                </div>
                <div className="BoxInfo">
                    <BoxInformation numero={aluno[0].overview.enrolledCourses} information="Cursos matriculados" foto={graduationCap}/>
                    <BoxInformation numero={aluno[0].overview.nextActivities} information="Atividades próximas" foto={tasks}/>
                    <BoxInformation numero={aluno[0].overview.onlineStudents} information="Alunos online" foto={userGraduate}/>
                </div>
            </div>) :(
                <div>
                    <h1>Carregando...</h1>
                </div>
            )}

        </div>

    )
}

export default Resumo;