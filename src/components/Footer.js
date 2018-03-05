import React, {Component} from 'react';

export default class AddTodo extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name
        }
        return (
            <a href='#' onClick={e => {
                e.preventDefault();
                this.props.setVisibilityFilter(filter);
            }}>{name}</a>
            )
    }
    render () {
        return (
            <div>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
                .
            </div>
            )
    }
}