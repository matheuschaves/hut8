import React, {useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getPublicObjects} from '../../services/requests'
import BoxLinkWPhoto from '../BoxLinkWPhoto'
import Loader from '../Loader'
import './styles.css';

function CourseInformation(props){
    const [aluno, setAluno] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        getPublicObjects()
        .then(res => {
            setAluno(res.data)
        })
    },[])

    return (
        <div className="CourseInformation">
            {aluno? (
                <div>
                    <h1>{props.titulo}</h1>
                    <div className="Bloco">
                        {aluno[0].courses[Number(id)].nextActivities.map(activitie =>  (
                            <div >
                                <BoxLinkWPhoto foto={activitie.image} typeCourse={activitie.course} name={activitie.title} turma={activitie.deadline}/>
                            </div>
                                ) )}
                    </div>
                </div>
            ):(
                <Loader/>
            )} 
        </div>
    )
}

export default CourseInformation;