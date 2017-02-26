const React     = require('react');
const ReactDOM  = require('react-dom');
const expect    = require('expect');
const $         = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const AddTodo = require('AddTodo');


describe('AddTodo',  () => {
	it('should exist',  () => {
		expect(AddTodo).toExist();
	});

	it('should call onAddTodo prop with valid data',  () => {
		var spy = expect.createSpy();
		var todoText = "Check mail";

		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(todoText);
	});

	it('should call onAddTodo prop with invalid data',  () => {
		var spy = expect.createSpy();
		var todoText = "";

		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled(todoText);
	});
});