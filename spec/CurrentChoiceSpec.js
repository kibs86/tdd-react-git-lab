import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CurrentChoice from '../src/components/CurrentChoice.js';
import TestWrapper from '../src/components/TestWrapper.js';

describe('Current Choice', function() {
    var component;
    beforeEach(function() {
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <CurrentChoice text = "Current selection: " />
            </TestWrapper>
        );
    });

    it('prints a message', function() {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component,'div').textContent;
        var expected = "Current selection: ";
        expect(actual).toEqual(expected);
    });

    it('renders without problems', function () {
        //var currentchoice = TestUtils.renderIntoDocument(<CurrentChoice />);
        expect (component).toEqual(jasmine.anything());
    });
});