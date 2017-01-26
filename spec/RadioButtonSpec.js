import React from 'react';
import TestUtils from 'react-addons-test-utils';
import RadioButton from '../src/components/RadioButton.js';

describe('Radio Button', function() {
    var component;
    beforeEach(function() {
        component = TestUtils.renderIntoDocument(
            <RadioButton text = 'Pizza' />
        );
    });

    it('prints a message', function() {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component,'div').textContent;
        var expected = 'Pizza';
        expect(actual).toEqual(expected);
    });
    
    it('renders without problems', function () {
        var radiobutton = TestUtils.renderIntoDocument(<RadioButton />);
        expect (radiobutton).toEqual(jasmine.anything());
    });
});