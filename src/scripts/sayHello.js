// ES5 syntax
//exports.greet = function greet(name) {
//     let counter = 0;
//     //let hour = getHours();
//
//     if (counter < 5) {
//         if (name === undefined) {
//             counter++;
//             return 'Hello, Friend!';
//         } else {
//             counter++;
//             return 'Hello, ' + name;
//         }
//     } else {
//         return 'I refuse to say hello.';
//     }
// }

// // ES6 syntax
// // export function greet(name) {
// // fat arrow syntax
// export let greet = (name) => {
//     let counter = 0;
//     //let hour = getHours();
//
//     if (counter < 5) {
//         if (name === undefined) {
//             counter++;
//             return 'Hello, Friend!';
//         } else {
//             counter++;
//             return 'Hello, ' + name;
//         }
//     } else {
//         return 'I refuse to say hello.';
//     }
// };

import React from 'react';

// Note: this is the pre-ES6 way of creating React classes
var SayHello = React.createClass({
    render: function() {

        return <h1>
            Hello, {this.props.name}!
        </h1>
    }
});

module.exports = SayHello;