var $ = require('jquery');

module.exports = {
	setTodos: function(todos) {
		if($.isArray(todos)) {
			//have to convert the todos as a string because of localstorage.
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function() {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		//should use this with JSON.parse
		try {
			todos = JSON.parse(stringTodos);
		} catch (e) {

		}

		return $.isArray(todos) ? todos : [];
	}
};