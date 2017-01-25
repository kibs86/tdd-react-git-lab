import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PollAnswer from '../src/components/PollAnswer.js';

describe('Poll Answer', function() {
    var component;
    beforeEach(function() {
        component = TestUtils.renderIntoDocument(
            <PollAnswer text = 'Pizza' />
        );
    });

    it('prints a message', function() {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component,'div').textContent;
        var expected = 'Pizza';
        expect(actual).toEqual(expected);
    });
    
    it('renders without problems', function () {
        var pollanswer = TestUtils.renderIntoDocument(<PollAnswer />);
        expect (pollanswer).toEqual(jasmine.anything());
    });
});