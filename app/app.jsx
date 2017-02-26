const React                                    = require('react');
const ReactDOM                                 = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

// components
var TodoApp = require('TodoApp');


//Load foundation styles
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');



ReactDOM.render(
	<TodoApp/>,
	document.getElementById('app')
);