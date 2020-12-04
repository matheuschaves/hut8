import React, {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getPublicObjects} from '../../services/requests'
import BoxLinkWPhoto from '../BoxLinkWPhoto'
import Loader from '../Loader'
import './styles.css';

function Curses(props){
    const [aluno, setAluno] = useState(null)

    

    useEffect(() => {
        getPublicObjects()
        .then(res => {
            setAluno(res.data)
        })
    },[])

    return (
        <div className="Resumo">
            <h1>{props.titulo}</h1>
            <div >
            {aluno?(
                <div className="Bloco">
                    {aluno[0].courses.map(course =>  (
                               <div >
                                    <Link to={"/Curso/"+ aluno[0].courses.indexOf(course)} className="link"><BoxLinkWPhoto foto={course.image} typeCourse={course.type} name={course.course} turma={course.class}/></Link>
                                </div>
                                    ))
                
                }
                </div>)
            :(
                <Loader />
            )}
            </div>
            
        </div>

    )
}

export default Curses;