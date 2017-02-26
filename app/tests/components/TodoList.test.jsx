const React     = require('react');
const ReactDOM  = require('react-dom');
const expect    = require('expect');
const $         = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const TodoList = require('TodoList');
const Todo = require('Todo');


describe('TodoList',  () => {
	it('should exist',  () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo component for each todo item',  () => {
		var todos = [
			{
				id: 1, 
				text: 'Do somethingn'
			},
			{
				id: 2, 
				text: 'Do else'
			}
		];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		//this is a property in testutils to count how many Todo's are being shown.  You pass it the parent component, and then the class name of the child components to count how many Todo's are in todoList.
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todosComponents.length).toBe(todos.length);

	});
});