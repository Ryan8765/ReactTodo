var React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');

const uuid = require('node-uuid');


var TodoApp = React.createClass({

	//uuid is a node package that creates unique id's based on the time.
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog'
				},
				{
					id: uuid(),
					text: 'Clean the yard'
				},
				{
					id: uuid(),
					text: 'Mow the lawn'
				},
				{
					id: uuid(),
					text: 'Jump over the ball'
				}
			]
		};
	},

	//this adds a todo item to the oriignal todos array using the spread operator.
	handleAddTodo: function(text) {
		this.setState({
			todos: [
				...this.state.todos, 
				{
					id: uuid(),
					text: text
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
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}

});


module.exports = TodoApp;