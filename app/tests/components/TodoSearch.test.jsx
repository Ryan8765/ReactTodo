const React     = require('react');
const ReactDOM  = require('react-dom');
const expect    = require('expect');
const $         = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const TodoSearch = require('TodoSearch');

describe('TodoSearch',  () => {
	it('should exist',  () => {
		expect(TodoSearch).toExist();
	});

	it('should call onSearch with entered input text',  () => {
		var spy = expect.createSpy();
		var searchText = 'Dog';
		var todoSearch = TestUtils.renderIntoDocument( <TodoSearch onSearch={spy}/> );

		todoSearch.refs.searchText.value = searchText;
		//this is how you simulate a change event
		TestUtils.Simulate.change(todoSearch.refs.searchText);

		expect(spy).toHaveBeenCalledWith(false, 'Dog');

	});

	it('should call onSearch with proper checked value',  () => {
		var spy = expect.createSpy();
		var searchText = 'Dog';
		var todoSearch = TestUtils.renderIntoDocument( <TodoSearch onSearch={spy}/> );

		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(true, '');
	});
});