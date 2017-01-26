import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButton from '../components/RadioButton';
import PollSubmitButton from '../components/PollSubmitButton';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            header: 'Welcome to the poll!',
            question: "What's your favorite food?",
            answer1: 'Tacos',
            answer2: 'Pizza',
            answer3: 'Sushi',
            correctAnswer: 'Pizza'
        };
    }

    render(){
        var rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };
        
        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text={this.state.header} />
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4 text-center">
                        <form>
                            <PollQuestion text={this.state.question}/>
                            <RadioButton text={this.state.answer1}/>
                            <RadioButton text={this.state.answer2}/>
                            <RadioButton text={this.state.answer3}/>
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