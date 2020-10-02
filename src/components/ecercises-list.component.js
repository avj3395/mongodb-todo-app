import React, { Component } from "react";
import axios from "axios";
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Exercise = props =>(
<tr>
<td>{props.exercise.username}</td>
<td>{props.exercise.description}</td>
<td>{props.exercise.duration}</td>
<td>{props.exercise.date.substring(0,10)}</td>
<td>
  <Link to={"/edit/"+props.exercise._id}><button className="btn btn-primary">Edit</button></Link> | <button className="btn btn-danger" onClick={() =>{props.deleteExercies(props.exercise._id)}} >delete</button>
</td>
</tr>
)


export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.deleteExercies = this.deleteExercies.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("https://todo-app-mongodb-backend.herokuapp.com/exercises/")
      .then((res) => {
        this.setState({ exercises: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteExercies(id) {
    axios
      .delete("https://todo-app-mongodb-backend.herokuapp.com/exercises/" +id)
      .then((res) => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter((elements) => elements._id !== id)
    });
  }

  exerciseList(){
    return this.state.exercises.map(currentexercise =>{
      return <Exercise exercise={currentexercise} deleteExercies={this.deleteExercies} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Dercription</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
             {this.exerciseList()}
          </tbody>
        </Table>
      </div>
    );
  }
}
