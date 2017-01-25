import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import PollAnswer from '../components/PollAnswer';
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
        return (
            <div className="container">
                <div className="col-sm-4 col-sm-offset-4 text-center">
                    <PollHeader text={this.state.header} />
                        <form>
                            <PollQuestion text={this.state.question}/>
                            <PollAnswer text={this.state.answer1}/>
                            <PollAnswer text={this.state.answer2}/>
                            <PollAnswer text={this.state.answer3}/>
                            <br />
                            <PollSubmitButton />
                        </form>
                </div>
            </div>
        );
    }
}

export default PollContainer;