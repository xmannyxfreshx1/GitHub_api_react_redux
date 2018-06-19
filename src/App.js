import React, { Component } from 'react';
import Form from './Components/Form';
import DisplayRepos from './Components/DisplayRepos';
import './App.css';
import { connect } from 'react-redux';
import { updateUser } from "./Actions/userActions";
import { updateRepo, apiRequest } from "./Actions/repoActions";

//https://api.github.com/users/xmannyxfreshx1

class App extends Component {

    constructor(props){
        super(props);
        this.onUpdateRepo = this.onUpdateRepo.bind(this);
    }
   /* // this is how the state was handled before adding redux
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

    };*/

   onUpdateRepo(e){
       e.preventDefault();
       this.props.onApiRequest(e.target.elements.username.value);
       this.props.onUpdateUser(e.target.elements.username.value);
       alert(`Username submitted: ${e.target.elements.username.value}`);
   }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github API Call</h1>
        </header>
          <Form onUpdateRepo={this.onUpdateRepo}/>
          <DisplayRepos publicRepos={this.props.repo} currentUser={this.props.user}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    user: state.user,
    repo: state.repo
});

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onUpdateRepo: updateRepo,
    onApiRequest: apiRequest

};

export default connect(mapStateToProps, mapActionsToProps)(App);
