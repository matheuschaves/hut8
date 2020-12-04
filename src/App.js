import React, {useEffect, useState} from 'react'
import './App.css';
import DashBoard from './containers/DashBoard';
import Cursos from './containers/Cursos'
import Curso from './containers/Curso'
import Sidebar from './components/Sidebar'
import { BrowserRouter,  Switch, Route} from 'react-router-dom'
import {getPublicObjects} from './services/requests'

function App() {
  const [aluno,setAluno] = useState(null)

    

  useEffect(() => {
      getPublicObjects()
      .then(res => {
          setAluno(res.data)
      })
  },[])

  return (
    <BrowserRouter>
      {aluno ? (
        <div className="PlaneBase">
            <div className="Sidebar">
              <Sidebar name = {aluno[0].name} curso = {aluno[0].course} set="Dashboard"/>
            </div>
            <Switch>
              <Route exact path="/" >
                <DashBoard />
              </Route>
              <Route path="/Cursos"> 
                <Cursos />
              </Route >
              <Route path="/Curso/:id" >
                <Curso />
              </Route>
              


            </Switch>
        </div>
      ) : (
        <div>
          <p>Carregando</p>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
