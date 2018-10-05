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
						<label className="center ">What do you want to say to {this.props.firstName} {this.props.lastName}?</label>
						<textarea
							rows="10"
							name="message"
							className="form-control"
							value={this.props.message}
							onChange={this.props.handleInputChange} />
					</div>
				</form>
				<br/>
				<LetterPreview {...this.props}/>
				<br/>
				<button onClick={this.props.cancel} className="btn btn-primary">Cancel</button>
				<button onClick={this.props.goBack} className="btn btn-primary">Previous Step</button>
				<button onClick={this.props.nextStep} id="letterReview" className="btn btn-primary">Review Letter</button>
			</div>
		)
	}
}

export default LetterForm