import React from "react"

class LetterForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>

				<form>
					<div className="form-group">
						<label>What do you want to say</label>
						<textarea
							rows="10"
							name="message"
							className="form-control"
							value={this.props.message}
							onChange={this.props.handleInputChange} />
					</div>
				</form>
			</div>
		)
	}
}

export default LetterForm