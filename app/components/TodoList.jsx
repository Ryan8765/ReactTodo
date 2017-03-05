const React = require('react');
const Todo = require('Todo');

var TodoList = React.createClass({

	render: function() {
		var {todos} = this.props;

		//handles rendering the list of todos.  Must specify a unique key identifier for the component that is going to get rendered.
		//...todo passes all of the properties on the todo object down as parameters to the todo component.  
		var renderTodos =  () => {
			if(todos.length === 0) {
				return (
					<p className="container__message">Nothing To Do Yet!</p>
				);
			}
			return todos.map((todo) => {
				return (
					<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
				);
			});
		};
		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
});

module.exports = TodoList;

