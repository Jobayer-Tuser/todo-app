import React from 'react';
import {CustomInput, Button} from 'reactstrap';
import PropTypes from 'prop-types'

const RowItem = ({todo, toggleSelect, toggleComplete}) =>{

    return(
        <tr>
            <td scope="row">
                <CustomInput
                    type="checkbox"
                    id= {todo.id}
                    checked= {todo.isSelect}
                    onChange = {()=> toggleSelect(todo.id) }
                />
            </td>
            <td>{todo.time.toDateString()}</td>
            <td>{todo.text}</td>
            <td>
                <Button className="btn-sm" color={todo.isComplete ? 'danger' : 'success'} onClick={()=> toggleComplete(todo.id) }>
                    {todo.isComplete ? 'Completed' : 'Running'}
                </Button>
            </td>
        </tr>
    );
}

RowItem.propTypes={
    todo : PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}
export default RowItem;
