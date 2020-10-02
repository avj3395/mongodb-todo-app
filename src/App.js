import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Navbars from "./components/navbar.component";
import ExercisesList from "./components/ecercises-list.component";
import EditExercises from "./components/edit-exercise.component";
import CreateExercises from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <Navbars />
      <br/>
      <Route path="/" exact component = {ExercisesList} />
      <Route path="/edit/:id" component = {EditExercises} />
      <Route path="/create" component = {CreateExercises} />
      <Route path="/user" component = {CreateUser} />

    </Router>
  );
}

export default App;