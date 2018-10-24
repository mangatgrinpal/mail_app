import React from "react"
import LetterPreview from "./LetterPreview"

class LetterReview extends React.Component {
	constructor(props) {
		super(props);

	}


	render () {
		
		return (
			<div className="col-md-12 review-page background-settings">
				<div className="col-md-8 offset-md-2">
					<h3 className="center">How does it look? Ready to send it?</h3>
					<br/>
					<LetterPreview {...this.props}/>
					<br/>
					<div className="btn-group btn-group-lg float-right">
						<button onClick={this.props.goBack} className="btn btn-danger">Go Back</button>
						<button onClick={this.props.nextStep} className="btn btn-success">Continue to Payment</button>
					</div>
					<br/>
					<br/>
				</div>
			</div>
		)
	}
}

export default LetterReview