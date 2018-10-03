import React from "react"

class LetterForm extends React.Component {
	constructor(props) {
		super(props);

	}

	


	render() {
		return (
			<div>
				<h3>Form Goes here</h3>
				<form>
					<label>
						Full name:<br/>
						<input
							type="text"
							name="name"
							value={this.props.name}
							onChange={this.props.handleInputChange} /><br/>
						Address line 1:<br/>
						<input
							type="text"
							name="address1"
							value={this.props.address1}
							onChange={this.props.handleInputChange} /><br/>
						Address line 2:<br/>
						<input
							type="text"
							name="address2"
							value={this.props.address2}
							onChange={this.props.handleInputChange} /><br/>
						City:<br/>
						<input
							type="text"
							name="city"
							value={this.props.city}
							onChange={this.props.handleInputChange} /><br/>
						State:<br/>
						<input
							type="text"
							name="state"
							value={this.props.state}
							onChange={this.props.handleInputChange} /><br/>
						Zip Code:<br/>
						<input
							type="text"
							name="zip"
							value={this.props.zip}
							onChange={this.props.handleInputChange} />
					</label>
					<br/>
					<label>
						What do you want to say?<br/>
						<textarea
							name="message"
							rows="20"
							cols="100"
							value={this.props.message}
							onChange={this.props.handleInputChange} />
					</label>
				</form>
				<div className="btn-group">
					<button onClick={this.props.toggleForm} className="btn btn-primary">Cancel</button>
					<button className="btn btn-primary">Submit</button>
				</div>
			</div>
		)
	}
}

export default LetterForm