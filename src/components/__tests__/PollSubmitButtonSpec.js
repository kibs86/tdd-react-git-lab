import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Poll Submit Button', function() {
    const PollSubmitButton = require('../PollSubmitButton').default;

    it('renders without a problem', function () {
        var pollsubmitbutton = TestUtils.renderIntoDocument(<PollSubmitButton />);
        var buttonText = ReactDOM.findDOMNode(pollsubmitbutton).textContent;

        expect(buttonText).toEqual('Go!');
    });
});