import React from "react"

class InfoForm extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		var destination;
		if (this.props.view === 2) {
			destination = "Where is this going?"
		}
		if (this.props.view === 3) {
			destination = "What's your address?"
		}
		
		return (
			<form>
				<div className="col-md-8 offset-md-2 address-form">
					<h3>{destination}</h3>
					<br/>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label>First Name</label>
							<input
								type="text"
								name="firstName"
								className="form-control"
								value={this.props.address.firstName}
								onChange={this.props.handleInputChange} />
						</div>
						<div className="form-group col-md-6">
							<label>Last Name</label>
							<input
								type="text"
								name="lastName"
								className="form-control"
								value={this.props.address.lastName}
								onChange={this.props.handleInputChange} />
						</div>
					</div>
					<div className="form-group">
						<label>Address line 1</label>
						<input
							type="text"
							name="address1"
							className="form-control"
							value={this.props.address.address1}
							onChange={this.props.handleInputChange} />
					</div>
					<div className="form-group">
						<label>Address line 2 (optional)</label>
						<input
							type="text"
							name="address2"
							className="form-control"
							value={this.props.address.address2}
							onChange={this.props.handleInputChange} />
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label>City</label>
							<input
								type="text"
								name="city"
								className="form-control"
								value={this.props.address.city}
								onChange={this.props.handleInputChange} />
						</div>
						<div className="form-group col-md-3">
							<label>State</label>
							<input
								type="text"
								name="state"
								className="form-control"
								value={this.props.address.state}
								onChange={this.props.handleInputChange} />
						</div>
						<div className="form-group col-md-3">
							<label>Zip Code</label>
							<input
								type="text"
								name="zip"
								className="form-control"
								value={this.props.address.zip}
								onChange={this.props.handleInputChange} />
						</div>
					</div>
					<div className="btn-group btn-group-sm">
						<button onClick={this.props.cancel} className="btn btn-danger">Cancel</button>
						<button onClick={this.props.goBack} className="btn btn-light">Previous Step</button>
						<button onClick={this.props.nextStep} className="btn btn-success">Continue</button>
					</div>
				</div>
			</form>
		)
	}
}

export default InfoForm