// Functional components can't be used dirctly with render or renderIntoDocument so the solution is to
// wrap them in a wrapper component for testing purposes.
// This will be called from the spec files.

import React from 'react';

class TestWrapper extends React.Component{
    render(){
        return this.props.children;
    }
}

export default TestWrapper;