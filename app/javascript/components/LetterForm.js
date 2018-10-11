import React from "react"
import LetterPreview from "./LetterPreview"

class LetterForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-md-8 offset-md-2 letter-prompt">
				<form>
					<div className="form-group">
						<label className="center ">What do you want to say to {this.props.to.firstName} {this.props.to.lastName}?</label>
						<textarea
							rows="10"
							name="message"
							className="form-control"
							value={this.props.message}
							onChange={this.props.handleInputChange} />
					</div>
				</form>
				<button onClick={this.props.clearMessage} className="btn btn-primary">Clear Message</button>
				<br/>
				<LetterPreview {...this.props}/>
				<br/>
				<div className="btn-group btn-group-sm">
					<button onClick={this.props.cancel} className="btn btn-danger">Cancel</button>
					<button onClick={this.props.goBack} className="btn btn-light">Previous Step</button>
					<button onClick={this.props.nextStep} className="btn btn-success">Review Letter</button>
				</div>
			</div>
		)
	}
}

export default LetterForm