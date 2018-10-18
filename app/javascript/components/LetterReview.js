import React from "react"
import LetterPreview from "./LetterPreview"

class LetterReview extends React.Component {
	constructor(props) {
		super(props);

	}


	render () {
		
		return (
			<div className="col-md-8 offset-md-2 review-page">
				<h2>How does it look? Ready to send it?</h2>
				<LetterPreview {...this.props}/>
				<br/>
				<div className="btn-group btn-group-sm">
					<button onClick={this.props.goBack} className="btn btn-light">Previous Step</button>
					<button onClick={this.props.nextStep} className="btn btn-success">Continue to Payment</button>
				</div>
			</div>
		)
	}
}

export default LetterReview