// original component

// import React from 'react';
//
// class PollHeader extends React.Component{
//     render(){
//         return (
//             <h1 className="text-center">{this.props.text}</h1>
//         );
//     }
// }
//
// export default PollHeader;


// re-structured into stateless functional component
import React from 'react';

function PollHeader(props) {
    return(<h1 className="text-center">{props.text}</h1>);
}

PollHeader.propTypes = {
    text: React.PropTypes.string
}

export default PollHeader;