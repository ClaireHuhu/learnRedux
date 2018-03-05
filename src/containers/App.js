import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilter} from '../actions'
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';


class App extends Component {
    render () {
        let {visibleTodos, visibilityFilter, addTodo, completeTodo, setVisibilityFilter} = this.props;
        return (
            <div>
                <AddTodo addTodo = {addTodo}/>
                <TodoList todos = {visibleTodos} completeTodo = {completeTodo}/>
                <Footer filter = {visibilityFilter} setVisibilityFilter = {setVisibilityFilter}/>
            </div>
            )
    }
}

function mapStateToProps (state, ownProps) {
    return {
        visibleTodos : selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter : state.visibilityFilter
    }
}

function mapDispatchToProps (dispatch, ownProps) {
    return {
        addTodo : (text) => dispatch(addTodo(text)),
        completeTodo : (index) => dispatch(completeTodo(index)),
        setVisibilityFilter : (filter) => dispatch(setVisibilityFilter(filter))
    }
}
function selectTodos (todos, filter) {
    let {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = VisibilityFilter;
    switch (filter) {
        case SHOW_ALL : return todos;
        case SHOW_ACTIVE : return todos.filter(todo => !todo.complete);
        case SHOW_COMPLETED : return todos.filter(todo => todo.complete);
        default : return todos;
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);