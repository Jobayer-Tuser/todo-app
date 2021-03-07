import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

class TodoForm extends Component{
 
    state={
        text: '',
        description: ''
    }
    onChangeHandler = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    onSubmitHandler = (event) =>{
        event.preventDefault();
        this.props.createTodo(this.state);

        event.target.reset();
        this.setState({text: '', description: ''});
    }

    render(){

        return(
            <Form onSubmit={this.onSubmitHandler}>
                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input type="text" name="text" placeholder="Enter Your Task" value={this.state.text} onChange={this.onChangeHandler}  />
                </FormGroup>
                <FormGroup>
                    <Label>Task Description/Details</Label>
                    <Input type="textarea" name="description" placeholder="Write some short description about your tasks " value={this.state.description} onChange={this.onChangeHandler}  />
                </FormGroup>
                <Button type="submit">Create Task</Button>
            </Form>
        );
    }
}
TodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
}


export default TodoForm; 