import React, {Component} from 'react';

export default class Todo extends Component {
    render () {
        let {text,complete, completeTodo} = this.props;
        let completeStyle = complete ? {textDecoration:'line-through',cursor: 'pointer'} : {};
        return <li onClick={completeTodo} style={completeStyle} >{text}</li>
    }
}