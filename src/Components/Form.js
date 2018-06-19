import React, {Component} from 'react';



class Form extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.onUpdateRepo}>
                    <input placeholder="Username..." style={{margin:"20px auto", display:"block"}} type="text" name="username"/>
                    <button>SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default Form;


/*

this is the code I tried initially. Having the map const in app.js is more intuitive and easier to read.
Also, this keeps the components independent of the store.

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
