import React, { Component } from 'react';

class Demo extends Component {
    render() {
        return (
            <h1 onClick={this.props.onClick}>
               It works! 
            </h1>
        );
    }
}

export default Demo;