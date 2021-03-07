import React from 'react';
import {Table} from 'reactstrap';
import RowItem from './RowItem';
import PropTypes from 'prop-types';

const TableView = ({todos, toggleSelect, toggleComplete}) =>{

    return(

        <Table>
            <thead>
                <td>#</td>
                <td>Time</td>
                <td>Todo</td>
                <td>Action</td>
            </thead>

            <tbody>
                { todos.map(todo => (
                    <RowItem
                        key= {todo.id}
                        todo= {todo}
                        toggleSelect= {toggleSelect}
                        toggleComplete= {toggleComplete}
                    />
                    ))}
            </tbody>
        </Table>
    );

}

TableView.propTypes={
    todos : PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}


export default TableView;