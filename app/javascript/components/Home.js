import React from "react"

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="col-12">
				<div className="col-5">
					<h1>What If I Told You Snail Mail Could Be Now Mail?</h1>
					<p> Write your letter online, we'll print it, envelope it, and send it for you.</p>
					<p> Takes less than 3 minutes</p>
					<p> All you have to do is type</p>
					<button onClick={this.props.nextStep} className="btn btn-primary">Write a letter</button>
				</div>
			</div>		
		)
	}
}

export default Home