import React from 'react';


const Form = (props) => {
    return (
        <form onSubmit={props.getUser} >
            <input placeholder="Username..." style={{margin:"20px auto", display:"block"}} type="text" name="username"/>
            <button>Submit</button>
        </form>
    );
}

export default Form;