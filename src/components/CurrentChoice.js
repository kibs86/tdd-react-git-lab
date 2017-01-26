import React from 'react';

class CurrentChoice extends React.Component{
    render(){
        return(
            <span>Your current choice is: {this.props.value}</span>
        );
    }
}

export default CurrentChoice;