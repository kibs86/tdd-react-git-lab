import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton.js';
import TestWrapper from '../src/components/TestWrapper.js';

describe('Submit Button', function() {
    var component;
    beforeEach(function() {
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollSubmitButton text = "Go" />
            </TestWrapper>
        );
    });

    it('prints a message', function() {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component,'button').textContent;
        var expected = "Go";
        expect(actual).toEqual(expected);
    });
    
    it('renders without problems', function () {
        //var pollsubmit = TestUtils.renderIntoDocument(<PollSubmitButton />);
        expect(component).toEqual(jasmine.anything());
    });
});