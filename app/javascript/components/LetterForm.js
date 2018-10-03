import React from "react"

class LetterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zip: '',
			message: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this)

	}

	handleInputChange(message) {
		const target = message.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
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
							name="address1"
							value={this.state.name}
							onChange={this.handleInputChange} /><br/>
						Address line 1:<br/>
						<input
							type="text"
							name="address1"
							value={this.state.address1}
							onChange={this.handleInputChange} /><br/>
						Address line 2:<br/>
						<input
							type="text"
							name="address2"
							value={this.state.address2}
							onChange={this.handleInputChange} /><br/>
						City:<br/>
						<input
							type="text"
							name="city"
							value={this.state.city}
							onChange={this.handleInputChange} /><br/>
						State:<br/>
						<input
							type="text"
							name="state"
							value={this.state.state}
							onChange={this.handleInputChange} /><br/>
						Zip Code:<br/>
						<input
							type="text"
							name="zip"
							value={this.state.zip}
							onChange={this.handleInputChange} />
					</label>
					<br/>
					<label>
						What do you want to say?<br/>
						<textarea
							name="message"
							rows="20"
							cols="100"
							value={this.state.message}
							onChange={this.handleInputChange} />
					</label>
				</form>
				<button className="btn btn-primary">Cancel</button>
				<button className="btn btn-primary">Submit</button>
			</div>
		)
	}
}

export default LetterForm