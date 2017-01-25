// ES5 syntax
//const sayHello = require('./sayHello.js');

// ES6 syntax
// below is same as the line after it because there's only one function in there.  Use curly braces because it's
// a function.
//import {greet} as sayHello from './sayHello.js';
// import * as sayHello from './sayHello.js';
//
// window.addEventListener('load', function() {
//     document.getElementById('welcome-message').innerHTML = sayHello.greet('World') + ' have a nice day!';
// });

import React from 'react';
import ReactDOM from 'react-dom';

// Note: this is the pre-ES6 way of creating React classes
var SayHello = React.createClass({
    render: function() {

        return <h1>
            Hello, {this.props.name}!
        </h1>
    }
});

ReactDOM.render(<SayHello name="World" />,
    document.getElementById('app'));