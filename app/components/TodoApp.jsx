var React = require('react');
const uuid = require('node-uuid');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({

	//uuid is a node package that creates unique id's based on the time.
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		};
	},
	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos);	
	},
	handleToggle: function(id) {
		var updatedTodos = this.state.todos.map((todo) => {

			if( todo.id === id ) {
				todo.completed = !todo.completed;
			}

			return todo;
		});

		this.setState({todos: updatedTodos});
	},

	//this adds a todo item to the oriignal todos array using the spread operator.
	handleAddTodo: function(text) {
		this.setState({
			todos: [
				...this.state.todos, 
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		})	
	},
	handleSearch: function(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},

	render: function() {
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}

});


module.exports = TodoApp;