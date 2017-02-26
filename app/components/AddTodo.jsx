const React = require('react');


var AddTodo = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();	
		var todoText = this.refs.todoText.value;
		if( todoText.length > 0 ) {
			this.refs.todoText.value = "";
			this.props.onAddTodo(todoText);
		} else {
			//put the cursor back in the text field if invalid text was sent.
			this.refs.todoText.focus();
		}
	},


	render: function() {
		return (
			<div>

				<form onSubmit={this.handleSubmit}>
					<input type="text" ref="todoText" placeholder="Enter Todo Text"/>
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		);
	}


});

module.exports = AddTodo;