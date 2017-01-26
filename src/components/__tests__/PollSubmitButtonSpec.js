import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import TestWrapper from '../TestWrapper.js';

describe('Poll Submit Button', function() {
    const PollSubmitButton = require('../PollSubmitButton').default;

    var component;
    beforeEach(function() {
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollSubmitButton text = "Go" />
            </TestWrapper>
        );
    });

    it('renders without a problem', function () {
        //var pollsubmitbutton = TestUtils.renderIntoDocument(<PollSubmitButton />);
        var buttonText = ReactDOM.findDOMNode(component).textContent;

        expect(buttonText).toEqual('Go');
    });
});