import React from "react"

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="col-md-12 home">
				<div className="row">
				<div className="col-md-4 offset-md-1 mission">
					<h1 className="center">What If I Told You Snail Mail Could Be Now Mail?</h1>
					<br/>
					<p> Write your letter online, we'll print it, envelope it, and send it for you.</p>
					<p> Takes less than 3 minutes</p>
					<p> All you have to do is type</p>
					<br/>
				</div>
				<div className="col-md-4 offset-md-1 center get-started">
					<button onClick={this.props.nextStep} className="btn btn-primary btn-lg">Get Started</button>
				</div>
				</div>
			</div>		
		)
	}
}

export default Home