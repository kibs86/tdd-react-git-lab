import React from 'react';

class PollQuestion extends React.Component{
    render(){
        return (
            <h3>{this.props.text}</h3>
        );
    }
}

export default PollQuestion;