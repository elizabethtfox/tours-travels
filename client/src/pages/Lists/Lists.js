import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Item from '../../components/Item/Item';

class Lists extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos: [
                {id: 0, text: "Stretchy pants"},
                {id: 1, text: "Raincoat"}
            ],
            nextId: 2
        }

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todoText){
        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, text: todoText});
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        });
    }

    removeTodo(id){
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
    })
    }

    render() {
        return (
            <div className="App">
                <div className="todo-wrapper">
                    <Header />
                    <Input todoText="" addTodo={this.addTodo}/>
                    <ul>
                    {
                        this.state.todos.map((todo) => {
                        return <Item todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
                        })
                     }
                    </ul>
                </div>
            </div>
    );
    }
}

export default Lists;
