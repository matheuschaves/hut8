import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getPublicObjects} from '../../services/requests'
import BoxInformation from '../Boxinformation'
import BoxProf from '../BoxProf'
import Loader from '../Loader'
import graduationCap from '../../assets/graduation-cap-solid.svg'
import tasks from '../../assets/tasks-solid.svg'
import userGraduate from '../../assets/user-graduate-solid.svg'
import './styles.css';


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
                </div>
                <div className="BoxInfo">
                    <Link to="/Cursos" className="navLink"><BoxInformation numero={aluno[0].overview.enrolledCourses} information="Cursos matriculados" foto={graduationCap}/></Link>
                    <Link to="/" className="navLink"><BoxInformation numero={aluno[0].overview.nextActivities} information="Atividades próximas" foto={tasks}/></Link>
                    <BoxInformation numero={aluno[0].overview.onlineStudents} information="Alunos online" foto={userGraduate}/>
                </div>
            </div>) :(
                <Loader />
            )}
        </div>
    )
}

export default Resumo;