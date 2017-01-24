var sayHello = require('../src/scripts/sayHello.js');

describe('Greet', function() {
    it('concats Hello and a name', function() {
        var actual = sayHello.greet('World');
        var expected = 'Hello, World';
        expect(actual).toEqual(expected);
    });

    it('says "Hello, Friend!" when no name is given', function() {
        var actual = sayHello.greet();
        var expected = 'Hello, Friend!';
        expect(actual).toEqual(expected);
    });

/*    it('gives an appropriate hello for the time of day', function() {
        var currentHour = sayHello.hour();
        var actual = sayHello('World');
        var expected;
        if (currentTime < 12) {
            expected = "Good morning, World!";
        } else if (currentTime > 17) {
            expected = "Good evening, World!";
        } else {
            expected = "Good afternoon, World!";
        }
        expect(actual).toEqual(expected);
    });*/

    it('refuses to say hello after the 4th time the function is called', function() {
        var counter = sayHello.counter;
        var actual = sayHello.greet();
        var expected = 'I refuse to say hello';
        if(counter === 4) {
            expect(actual).toEqual(expected);
        }
    });
});
