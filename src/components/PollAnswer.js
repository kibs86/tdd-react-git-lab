import React from 'react';

class PollAnswer extends React.Component{
    render(){
        return (
            <div> <input type="radio" name="food" value="pizza" /> Pizza </div>
        );
    }
}

export default PollAnswer;