import React, { Component } from 'react';
import Form from './Components/Form';
import './App.css';

//https://api.github.com/users/xmannyxfreshx1

class App extends Component {

    state={
        repos: null
    };

    getUser = async (e) => {
        e.preventDefault();
        const user = e.target.elements.username.value;
        const api_call= await fetch(`https://api.github.com/users/${user}`);
        const data = await api_call.json();
        //const repos = data.public_repos;
        this.setState({
            repos:data.public_repos
        });

        //console.log(repos);

    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github API Call</h1>
        </header>
          <Form getUser={this.getUser}/>
          {this.state.repos ? <p>The number of repos is: {this.state.repos}</p>:<p>Enter a Username to search</p>}


      </div>
    );
  }
}

export default App;
