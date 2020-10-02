import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class EditExercises extends Component {
  constructor(props) {
    super(props);
    this.onchangeusername = this.onchangeusername.bind(this);
    this.onchangedescription = this.onchangedescription.bind(this);
    this.onchangeduration = this.onchangeduration.bind(this);
    this.onchangedate = this.onchangedate.bind(this);
    this.onsubmit = this.onsubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://todo-app-mongodb-backend.herokuapp.com/exercises/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(res.data.date),
        });
      }) 
      .catch(function (err) {
        console.log(err);
      });

    axios.get("https://todo-app-mongodb-backend.herokuapp.com/users/").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map((user) => user.username),
        });
      }
    });
  }

  onchangeusername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onchangedescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onchangeduration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onchangedate(date) {
    this.setState({
      date: date,
    });
  }

 async onsubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    }; 
    console.log(exercise);
   await axios.post('https://todo-app-mongodb-backend.herokuapp.com/exercises/update/'+this.props.match.params.id,exercise)
    .then(res => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
        <div className="container">
          <form onSubmit={this.onsubmit}>
            <div className="form-group">
              <label>User Name</label>
              <select
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onchangeusername}
              >
                {this.state.users.map(function (user) {
                  return (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  );
                })}
              </select>
            </div>
  
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                value={this.state.description}
                onChange={this.onchangedescription}
              />
            </div>
  
            <div className="form-group">
              <label>Duration</label>
              <input
                type="text"
                className="form-control"
                value={this.state.duration}
                onChange={this.onchangeduration}
              />
            </div>
  
            <div className="form-group">
              <label>Date:</label>
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onchangedate}
                />
              </div>
            </div>
  
            <div className="form-group">
              <input type="submit" className="btn btn-primary"/>
            </div>
          </form>
        </div>
      );
  }
}
