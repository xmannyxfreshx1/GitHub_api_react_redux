import React, {Component} from 'react';


class DisplayRepos extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{paddingTop:10}}>
                {this.props.publicRepos !== null && <text>The number of public repositories {this.props.currentUser} has is {this.props.publicRepos}</text>}
            </div>
        );
    }
}

export default DisplayRepos;

/*
const mapStateToProps = state =>{
    return{ repos: state.repos };
};

const ConnectedDisplayRepos = ({repos}) => (
    <div>
        {repos ? <p>The number of repos is: {repos}</p>:<p>Enter a Username to search</p>}
    </div>
);

const DisplayRepos = connect(mapStateToProps)(ConnectedDisplayRepos);

export default DisplayRepos;
*/