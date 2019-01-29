import React from 'react';
import styled from 'styled-components';

const TodoDiv = styled.div`
    margin: 10px;
    padding: 10px;
    background-color: black;
    color: white;
`;

export default props => {
    return <TodoDiv>{props.todo}</TodoDiv>;
}