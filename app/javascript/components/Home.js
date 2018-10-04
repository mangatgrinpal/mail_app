import React from "react"

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="row center">
				<div className="col-12">
					<h2>What would you like to do?</h2>
				</div>
				<div className="col-6">
					<button onClick={this.props.nextStep} id="toAddress" className="btn btn-primary">Write a letter</button>
				</div>
				<div className="col-6">
					<h3>Sign Up/In</h3>
				</div>
			</div>
		)
	}
}

export default Home