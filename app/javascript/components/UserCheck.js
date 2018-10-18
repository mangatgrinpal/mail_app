import React from "react"

class UserCheck extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="col-md-8 offset-md-2">
				<button onClick={this.props.cancel} className="btn btn-danger">Cancel</button>
				<button onClick={this.props.goBack} className="btn btn-light">Previous Step</button>
				<button onClick={this.props.nextStep} className="btn btn-primary">Continue</button>
			</div>
		)
	}
}

export default UserCheck