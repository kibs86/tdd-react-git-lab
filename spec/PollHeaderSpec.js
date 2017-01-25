import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PollHeader from '../src/components/PollHeader.js';

describe('Header', function() {
    it('renders without problems', function () {
        var pollheader = TestUtils.renderIntoDocument(<PollHeader />);
        expect (pollheader).toEqual(jasmine.anything());
    });
});