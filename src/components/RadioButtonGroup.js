import React from 'react';
import RadioButton from './RadioButton';

class RadioButtonGroup extends React.Component{
    render(){

        const choiceItems = this.props.choices.map(choice => {
            const {value, label} = choice;
            const checked = value === this.props.checkedValue;

            return (
                <RadioButton
                    key={`radio-button-${value}`}
                    label={label}
                    name={this.props.name}
                    value={value}
                    checked={checked}
                    onChange={this.props.onChange}
                />
            );
        });

        return (
            <div>
                {choiceItems}
            </div>
        );
    }
}

RadioButtonGroup.propTypes = {
    name: React.PropTypes.string,
    checkedValue: React.PropTypes.string,
    choices: React.PropTypes.array,
    onChange: React.PropTypes.func
};

export default RadioButtonGroup;