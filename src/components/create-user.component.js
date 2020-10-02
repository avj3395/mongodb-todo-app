import React, { Component } from "react";
import axios from 'axios';
export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onchangeusername = this.onchangeusername.bind(this);

    this.onsubmit = this.onsubmit.bind(this);

    this.state = {
      username: "",
      
    }
  }

  onchangeusername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onsubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      
    }
    console.log(user);
    axios.post('https://todo-app-mongodb-backend.herokuapp.com/users/add',user)
    .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onsubmit}>
        <div className="form-group">
            <label>UserName</label>
            <input
              type="text"
              className="form-control"
              placeholder="add username"
              value={this.state.username}
              onChange={this.onchangeusername}
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-success"/>
          </div>
        </form>
      </div>
    );
  }
}
