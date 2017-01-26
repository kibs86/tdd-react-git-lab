// original component

// import React from 'react';
//
// class PollQuestion extends React.Component{
//     render(){
//         return (
//             <h3>{this.props.text}</h3>
//         );
//     }
// }
//
// export default PollQuestion;


// re-structured into stateless functional component
import React from 'react';

function PollQuestion(props) {
    return(<h3>{props.text}</h3>);
}

PollQuestion.propTypes = {
    text: React.PropTypes.string
}

export default PollQuestion;