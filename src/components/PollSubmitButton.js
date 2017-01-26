// original component

// import React from 'react';
//
// class PollSubmitButton extends React.Component{
//     render(){
//         return (
//             <button className="btn btn-success" type="submit" value="Submit"> Go </button>
//         );
//     }
// }
//
// export default PollSubmitButton;


// re-structured into stateless functional component
import React from 'react';

function PollSubmitButton(props) {
    return(<button className="btn btn-success" type="submit" value="Submit"> Go </button>);
}

export default PollSubmitButton;