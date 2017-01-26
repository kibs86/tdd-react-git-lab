// original component

// import React from 'react';
//
// class CurrentChoice extends React.Component{
//     render(){
//         return(
//             <span>Your current choice is: {this.props.value}</span>
//         );
//     }
// }
//
// export default CurrentChoice;


// re-structured into stateless functional component
import React from 'react';

function CurrentChoice(props) {
    return(<div>Current selection: {props.value}</div>);
}

export default CurrentChoice;

CurrentChoice.propTypes = {
    value: React.PropTypes.string
};