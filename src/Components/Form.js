import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getRepo} from "../Actions/index";

class Form extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>

        </div>);
    }
}

export default Form;


/*
const mapDispachToProps = dispatch => {
    return{
        getRepo: repos => dispatch(getRepo(repos))
    };
};

class ConnectedForm extends Component {
    state = {
        repos: null
    };

    getUser = async (e) => {
        e.preventDefault();
        const user = e.target.elements.username.value;
        const api_call = await fetch(`https://api.github.com/users/${user}`);
        const data = await api_call.json();
        //const repos = data.public_repos;
        this.setState({
            repos: data.public_repos
        });
        console.log(this.state.repos,'this is repos');

    };


    render(){
        return(
            <form onSubmit={this.getUser} >
                <input placeholder="Username..." style={{margin:"20px auto", display:"block"}} type="text" name="username"/>
                <button>Submit</button>
            </form>
        );
    }
}

const Form = connect(null, mapDispachToProps) (ConnectedForm);


export default Form;


const Form = (props) => {
    return (
        <form onSubmit={props.getUser} >
            <input placeholder="Username..." style={{margin:"20px auto", display:"block"}} type="text" name="username"/>
            <button>Submit</button>
        </form>
    );
}

export default Form;*/
