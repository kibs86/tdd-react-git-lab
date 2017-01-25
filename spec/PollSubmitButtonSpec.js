import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton.js';

describe('Answer', function() {
    it('renders without problems', function () {
        var pollsubmit = TestUtils.renderIntoDocument(<PollSubmitButton />);
        expect (pollsubmit).toEqual(jasmine.anything());
    });
});