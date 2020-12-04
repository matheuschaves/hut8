import React, {useEffect, useState} from 'react'
import { BrowserRouter,  Switch, Route} from 'react-router-dom'
import {getPublicObjects} from './services/requests'
import DashBoard from './containers/DashBoard';
import Cursos from './containers/Cursos'
import Curso from './containers/Curso'
import Sidebar from './components/Sidebar'
import Loader from './components/Loader'
import './App.css';

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
          <Loader />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
