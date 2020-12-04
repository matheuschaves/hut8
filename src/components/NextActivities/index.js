import React, {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getPublicObjects} from '../../services/requests'
import BoxLinkWPhoto from '../BoxLinkWPhoto'
import Loader from '../Loader'
import './styles.css';

function NextActivities(props){
    const [aluno, setAluno] = useState(null)

    useEffect(() => {
        getPublicObjects()
        .then(res => {
            setAluno(res.data)
        })
    },[])

    return (
        <div className="NextActivities">
            <h1>{props.titulo}</h1>
            <div >
            {aluno?(
                <div className="Bloco">
                    {aluno[0].nextActivities.map(activitie =>  (
                               <div >
                                    <BoxLinkWPhoto foto={activitie.image} typeCourse={activitie.course} name={activitie.title} turma={activitie.deadline}/>
                                </div>
                                    ))
                }
                </div>)
            :(
                <Loader/>
            )}
            </div>  
        </div>
    )
}

export default NextActivities;