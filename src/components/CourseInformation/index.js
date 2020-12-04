import React, {useState , useEffect} from 'react'
import './styles.css';
import BoxLinkWPhoto from '../BoxLinkWPhoto'
import {getPublicObjects} from '../../services/requests'
import {useParams} from 'react-router-dom'

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
                <div>
                    <p>Carregando</p>
                </div>
            )}
            
        </div>

    )
}

export default CourseInformation;