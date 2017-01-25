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
//import SayHello from './SayHello';

// ReactDOM.render(<SayHello name="World" />,
//     document.getElementById('app'));

import PollContainer from '../containers/PollContainer';

ReactDOM.render(<PollContainer />,
    document.getElementById('app'));