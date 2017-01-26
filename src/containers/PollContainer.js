import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton';
import CurrentChoice from '../components/CurrentChoice';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            header: 'Welcome to the poll!',
            question: "What's your favorite food?",
            correctAnswer: 'Pizza',
            checkedValue: ''
        };
        this.setCheckedValue = this.setCheckedValue.bind(this);
    }
    
    setCheckedValue (value) {
        this.setState({
            checkedValue: value
        });
        console.log("current choice: " + value);
    }

    render(){
        var rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        const choices = [
            {value: 'Tacos', label: 'Tacos'},
            {value: 'Pizza', label: 'Pizza'},
            {value: 'Sushi', label: 'Sushi'}
        ];
        
        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text={this.state.header} />
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4 text-center">
                        <form>
                            <PollQuestion text={this.state.question}/>
                            <RadioButtonGroup name='answer'
                                              checkedValue={this.state.checkedValue}
                                              choices={choices}
                                              onChange = {this.setCheckedValue} />
                            <br />
                            <CurrentChoice value={this.state.checkedValue}/>
                            <br />
                            <PollSubmitButton />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;