exports.greet = function greet(name) {
    if (name === undefined) {
        return 'Hello, Friend!';
    } else {
        return 'Hello, ' + name;
    }
};