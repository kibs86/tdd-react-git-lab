import React from 'react';

class RadioButton extends React.Component{
    render(){
        return (
            <div className="radio">
                <label>
                    <input type="radio"
                           name={this.props.name}
                           value={this.props.value}
                           checked={this.props.checked}
                    />
                    <span>{this.props.label}</span>
                </label>
            </div>
        );
    }
}

export default RadioButton;