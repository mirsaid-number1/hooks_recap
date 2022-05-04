import React, { Component } from "react";
import UserForm from "./components/UserForm";
import axios from "axios";
import "./axios.css";
class Axios extends Component {
  state = {
    repos: null,
    name: null,
    login: null,
    id: null,
    created_at: null,
    followers: null,
    following: null,
    url: null,
    avatar_url: null,
    bio: null,
    location: null,
    updated_at: null,
    developerList: [],
  };

  getUser = (e) => {
    e.preventDefault();
    let user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`).then((res) => {
      let repos = res.data.public_repos;
      let name = res.data.name;
      let login = res.data.login;
      let id = res.data.id;
      let created_at = res.data.created_at;
      let followers = res.data.followers;
      let following = res.data.following;
      let url = res.data.url;
      let avatar_url = res.data.avatar_url;
      let bio = res.data.bio;
      let location = res.data.location;
      let updated_at = res.data.updated_at;
      console.log(id);
      this.setState({
        repos,
        name,
        login,
        id,
        created_at,
        followers,
        following,
        url,
        avatar_url,
        bio,
        location,
        updated_at,
      });
      console.log(res);
    });
  };
  render() {
    return (
      <div className="container p-3 my-3 bg-dark text-white">
        <header className="app-header">
          <h1 className="App-title">gitHub hack</h1>
        </header>
        <UserForm getUser={this.getUser} />
        <div className="l">
          {this.state.id ? (
            <ol>
              <li>
                <p>your name is {this.state.name}</p>
                {console.log(this.state.name)}
              </li>
              <li>
                <p>
                  this is your account avatar
                  <img
                    src={this.state.avatar_url}
                    className="icon"
                    alt="avatar"
                  />
                </p>
              </li>
              <li>
                <p>bio: {this.state.bio}</p>
              </li>
              <li>
                <p>location: {this.state.location}</p>
              </li>
              <li>
                <p>this account created in {this.state.created_at}</p>
              </li>
              <li>
                <p>last time updated in {this.state.updated_at}</p>
              </li>
              <li>
                <p>you have roughly {this.state.followers} followers</p>
              </li>
              <li>
                <p>you are following to {this.state.following} gitHub users</p>
              </li>

              <li>
                <p>your reposes {this.state.repos}</p>
              </li>
              <li>
                <p>your id {this.state.id}</p>
              </li>
              <li>
                <p>as well as your login {this.state.login}</p>
              </li>
              <li>
                <p>finally here is your account url: {this.state.url}</p>
              </li>
            </ol>
          ) : (
            <p>please inter username</p>
          )}
        </div>
      </div>
    );
  }
}

export default Axios;
