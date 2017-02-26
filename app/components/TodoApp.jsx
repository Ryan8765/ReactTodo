var React = require('react');
const TodoList = require('TodoList');
var TodoApp = React.createClass({

	getInitialState: function() {
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				},
				{
					id: 2,
					text: 'Clean the yard'
				},
				{
					id: 3,
					text: 'Mow the lawn'
				},
				{
					id: 4,
					text: 'Jump over the ball'
				}
			]
		};
	},

	render: function() {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		);
	}

});


module.exports = TodoApp;