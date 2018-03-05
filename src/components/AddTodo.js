import React, {Component} from 'react';

export default class AddTodo extends Component {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        this.props.addTodo(this.input.value);
    }
    render () {
        return (
            <div>
                <input type='text' ref={input => this.input = input} />
                <button onClick={this.handleClick}>ADD</button>
            </div>
            )
    }
}