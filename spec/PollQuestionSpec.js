import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PollQuestion from '../src/components/PollQuestion.js';

describe('Poll Question', function() {
    var component;
    beforeEach(function() {
        component = TestUtils.renderIntoDocument(
            <PollQuestion text = "What's your favorite food?" />
        );
    });

    it('prints a message', function() {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component,'h3').textContent;
        var expected = "What's your favorite food?";
        expect(actual).toEqual(expected);
    });

    it('renders without problems', function () {
        var pollquestion = TestUtils.renderIntoDocument(<PollQuestion />);
        expect (pollquestion).toEqual(jasmine.anything());
    });
});