import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PollAnswer from '../src/components/PollAnswer.js';

describe('Answer', function() {
    it('renders without problems', function () {
        var pollanswer = TestUtils.renderIntoDocument(<PollAnswer />);
        expect (pollanswer).toEqual(jasmine.anything());
    });
});