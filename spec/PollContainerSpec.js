import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PollContainer from '../src/containers/PollContainer.js';

describe('Answer', function() {
    it('renders without problems', function () {
        var pollcontainer = TestUtils.renderIntoDocument(<PollContainer />);
        expect (pollcontainer).toEqual(jasmine.anything());
    });
});