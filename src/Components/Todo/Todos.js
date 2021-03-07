import React, {Component} from 'react';
import shortid from 'shortid';
import ListView from '../listview/ListView';
import TableView from '../TableView/TableView';
import Controller from '../Controller/Contoller';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import Form from '../TodoForm/Form';

class Todos extends Component{

    state={
        todos: [
            {
                id: 'tuser112',
                text: 'this is todo item 1',
                description: 'this is todo item 1',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'tuser113',
                text: 'this is todo item 2',
                description: 'this is todo item 2',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'tuser114',
                text: 'this is todo item 4',
                description: 'this is todo item 2',
                time: new Date(),
                isComplete: false,
                isSelect: false,
            },
            {
                id: 'tuser115',
                text: 'this is todo item 4',
                description: 'this is todo item 2',
                time: new Date(),
                isComplete: false,
                isSelect: false,
            },
        ],
        isOpenTodoForm: false,
        searchTerm : '',
        view: 'table',
        filter: 'all'
    }

    toggleSelect = (todoId) =>{
        const todos = [...this.state.todos];
        const todo = todos.find( t=> t.id === todoId);
        todo.isSelect = !todo.isSelect;

        this.setState({todos});

    }
    toggleComplete = (todoId) =>{
        const todos = [...this.state.todos];
        const todo = todos.find( t=> t.id === todoId);
        todo.isComplete = !todo.isComplete;

        this.setState({todos});
    };

    toggleForm = () =>{
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        });
    };

    searchHandler = (value) =>{
        this.setState({searchTerm: value})
    };
    performSearch =()=>{
        return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    };

    getView =()=>{
        let todos = this.performSearch();
        todos = this.performFilter(todos);
        return this.state.view === 'list' ?(
            <ListView todos={todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete} />
        ):(
            <TableView todos={todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete} />
        );
    };

    createTodo = (todo) =>{
        todo.id = shortid.generate();
        todo.time = new Date();
        todo.isComplete = false;
        todo.isSelect = false;

        const todos = [todo, ...this.state.todos];
        this.setState({todos});
        this.toggleForm();
    };

    filterHandler = (filter) =>{
        this.setState({filter});
    };

    performFilter = (todos) =>{
        const {filter} = this.state
        if(filter === 'completed'){
            return todos.filter(todo=> todo.isComplete);
        }
        else if(filter === 'running'){
            return todos.filter(todo => !todo.isComplete);
        }
        else{
            return todos;
        }
    }



    changeView =(event)=>{
        this.setState({
            view: event.target.value
        });
    };

    clearSelected =()=>{
        const todos = this.state.todos.filter(todo => !todo.isSelect);
        this.setState({todos});
    }
    clearCompleted =()=>{
        const todos = this.state.todos.filter(todo => !todo.isComplete);
        this.setState({todos});
    }
    reset =()=>{
        this.setState({
            serachTerm: '',
            filter: 'all',
            view: 'table',
            isOpenTodoForm: false

        })
    }

    render(){

        return(
            <div>
                <h3 className="display-4 text-center text-warning mb-5">Todo App</h3>
                <Controller
                    term={this.state.serachTerm}
                    view={this.state.view}
                    reset={this.reset}
                    searchHandler={this.searchHandler} 
                    toggleForm={this.toggleForm}  
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    filterHandler={this.filterHandler}
                 />
                <div>
                    {this.getView()}
                </div>

                <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo item
                    </ModalHeader>
                    <ModalBody>
                        <Form createTodo={this.createTodo} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Todos;