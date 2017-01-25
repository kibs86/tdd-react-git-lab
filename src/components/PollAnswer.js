import React from 'react';

class PollAnswer extends React.Component{
    render(){
        return (
            <div><input type="radio" name="food" value="pizza" />{this.props.text}</div>
        );
    }
}

export default PollAnswer;