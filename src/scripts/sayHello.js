exports.greet = function greet(name) {
    let counter = 0;
    //let hour = getHours();

    if (counter < 5) {
        if (name === undefined) {
            counter++;
            return 'Hello, Friend!';
        } else {
            counter++;
            return 'Hello, ' + name;
        }
    } else {
        return 'I refuse to say hello.';
    }
};