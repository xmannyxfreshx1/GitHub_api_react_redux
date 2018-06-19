import React from 'react';
import { connect } from 'react-redux';

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