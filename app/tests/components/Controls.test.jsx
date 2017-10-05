var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
	it('should exist', () => {
		expect(Controls).toExist();
	});
	describe('render', () => {
		var controlsStart = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
		var controlsPoused = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
		var $el1 = $(ReactDOM.findDOMNode(controlsStart));
		var $el2 = $(ReactDOM.findDOMNode(controlsPoused));
		var $pauseButton = $el1.find('button:contains(Pause)');
		var $startButton = $el2.find('button:contains(Start)');

		it('should find "Pause" button', () => {
			expect($pauseButton.length).toBe(1);
		});
		it('should find "Start" button', () => {
			expect($startButton.length).toBe(1);
		});
	});
});