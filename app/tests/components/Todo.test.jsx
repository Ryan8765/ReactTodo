const React     = require('react');
const ReactDOM  = require('react-dom');
const expect    = require('expect');
const $         = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Todo = require('Todo');
const TodoApp = require('TodoApp');


describe('Todo',  () => {

	it('should exist',  () => {
		expect(Todo).toExist();
	});

	it('should toggle completed value when handleToggle called',  () => {
		var todoData = {
			id: 11,
			text: 'Test features',
			completed: false
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: [todoData]});

		//check that todos first item has completed value of false
		//Call handleToggle with 11
		todoApp.handleToggle(11);
		//Check the completed value changed
		expect(todoApp.state.todos[0].completed).toBe(true);

	});

	it('should call onToggle prop with id on click',  () => {
		var todoData = {
			id: 100,
			text: 'Write todo test',
			completed: true
		};

		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

		var $el = $(ReactDOM.findDOMNode(todo));
		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(100);
	});

});