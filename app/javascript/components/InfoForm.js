import React from "react"

class InfoForm extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<form>
				<div className="col-md-8 offset-md-2 send-address">
					<h3 className="center">Where is this going?</h3>
					<br/>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label>First Name</label>
							<input
								type="text"
								name="firstName"
								className="form-control"
								value={this.props.firstName}
								onChange={this.props.handleInputChange} />
						</div>
						<div className="form-group col-md-6">
							<label>Last Name</label>
							<input
								type="text"
								name="lastName"
								className="form-control"
								value={this.props.lastName}
								onChange={this.props.handleInputChange} />
						</div>
					</div>
					<div className="form-group">
						<label>Address line 1</label>
						<input
							type="text"
							name="address1"
							className="form-control"
							value={this.props.address1}
							onChange={this.props.handleInputChange} />
					</div>
					<div className="form-group">
						<label>Address line 2</label>
						<input
							type="text"
							name="address2"
							className="form-control"
							value={this.props.address2}
							onChange={this.props.handleInputChange} />
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label>City</label>
							<input
								type="text"
								name="city"
								className="form-control"
								value={this.props.city}
								onChange={this.props.handleInputChange} />
						</div>
						<div className="form-group col-md-3">
							<label>State</label>
							<input
								type="text"
								name="state"
								className="form-control"
								value={this.props.state}
								onChange={this.props.handleInputChange} />
						</div>
						<div className="form-group col-md-3">
							<label>Zip Code</label>
							<input
								type="text"
								name="zip"
								className="form-control"
								value={this.props.zip}
								onChange={this.props.handleInputChange} />
						</div>
					</div>
					<div className="btn-group btn-group-sm">
						<button onClick={this.props.cancel} className="btn btn-danger">Cancel</button>
						<button onClick={this.props.nextStep} id="letterField" className="btn btn-success">Continue</button>
					</div>
				</div>
			</form>
		)
	}
}

export default InfoForm