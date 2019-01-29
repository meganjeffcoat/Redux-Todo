import React from 'react';
import { connect } from 'react-redux';

const TodoList = props => {
    return (
        <TodoDiv>
            <h1>Todo List</h1>
            <Todo todo={test} />
        </TodoDiv>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps)(TodoList);