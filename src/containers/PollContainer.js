import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton';
import CurrentChoice from '../components/CurrentChoice';
import $ from 'jquery';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            header: '',
            question: '',
            correctAnswer: '',
            choices: [],
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

    checkAnswer (value) {
        if (value===this.state.correctAnswer) {
            console.log('correct');
        }
    }

    componentWillMount() {
        console.log('componentWillMount()');
    }
    componentDidMount() {
        console.log('componentDidMount()');
        this.serverRequest = $.get('http://localhost:8000/data/data.json', function (result) {
            var data = result;
            this.setState({
                header: data.poll.header,
                question: data.poll.questions[0].question,
                choices: data.poll.questions[0].choices,
                correctAnswer: data.poll.questions[0].correctAnswer
            });
        }.bind(this));
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps()');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()');
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate()');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    render(){
        var rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        //const choices = data.poll.questions[0].choices;
        
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
                                              choices={this.state.choices}
                                              onChange = {this.setCheckedValue} />
                            <br />
                            <CurrentChoice value={this.state.checkedValue}/>
                            <br />
                            <PollSubmitButton handleClick={this.checkAnswer}/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;