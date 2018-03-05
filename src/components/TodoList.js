import React, {Component} from 'react';
import Todo from './Todo';

export default class AddTodo extends Component {
    render () {
        let {todos, completeTodo} = this.props;
        return (
            <ul>
                {todos.map((todo,index) => <Todo {...todo} completeTodo={()=>completeTodo(index)} key={index}/>)}
            </ul>
            )
    }
}