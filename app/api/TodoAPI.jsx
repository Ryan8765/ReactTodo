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
	},

	//used to filter out todos
	filterTodos: function(todos, showCompleted, searchText) {
		var filteredTodos = todos;

		//filter by showCompleted
		var filteredTodos = filteredTodos.filter( (todo) => {
			return !todo.completed || showCompleted;
		});
		
		//filter by serachtext
		filteredTodos = filteredTodos.filter((todo) => {
			if(searchText === '') {
				return true;
			} else if ( todo.text.toLowerCase().indexOf(searchText) > -1 ) {
				return true;
			} else {
				return false;
			}
		});

		//sort todos with non-completed first
		filteredTodos.sort((a, b) => {
			if(!a.completed && b.completed) {
				return -1;
			} else if (a.completed && !b.completed) {
				return 1;
			} else {
				return 0;
			}
		});

		return filteredTodos;
	},


};