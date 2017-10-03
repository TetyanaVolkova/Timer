var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var CountDown = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			countdownState: 'stopped'
		};
	},
	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.countdownState !== prevState.countdownState) {
			switch (this.state.countdownState) {
				case 'started':
				this.startTimer();
				break;
			}
		}
	},
	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.count - 1;
			if(newCount >= 0) {
				this.setState({
					count: newCount
				});
			} else {
				clearInterval(this.timer);
			}
			// debugger;

		}, 1000);
	},
	handleSetCountdown: function(seconds) {
		this.setState({
			count: seconds,
			countdownState: 'started'
		});
	},

	render: function() {
		var {count} = this.state;
		return (
			<div>
				<Clock totalSeconds={count} />
				<CountdownForm onSetCountdown={this.handleSetCountdown} />
			</div>
		);
	}
});

module.exports = CountDown;