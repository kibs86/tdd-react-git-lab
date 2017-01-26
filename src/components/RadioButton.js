import React from 'react';

class RadioButton extends React.Component{
    render(){
        return (
            <div><input type="radio" name="food" value="pizza" />{this.props.text}</div>
        );
    }
}

export default RadioButton;