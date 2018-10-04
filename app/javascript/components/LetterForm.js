import React from "react"
import LetterPreview from "./LetterPreview"

class LetterForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<form>
					<div className="form-group">
						<label>What do you want to say to {this.props.firstName} {this.props.lastName}?</label>
						<textarea
							rows="10"
							name="message"
							className="form-control"
							value={this.props.message}
							onChange={this.props.handleInputChange} />
					</div>
				</form>
				<div id="preview">
					Letter Preview Here
					<br/>
					{this.props.message}
				</div>
			</div>
		)
	}
}

export default LetterForm