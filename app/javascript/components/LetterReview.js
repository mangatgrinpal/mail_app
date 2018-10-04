import React from "react"
import LetterPreview from "./LetterPreview"

class LetterReview extends React.Component {
	constructor(props) {
		super(props);

	}

	render () {
		return (
			<div className="col-md-8 offset-md-2">
				<LetterPreview {...this.props}/>
				<br/>
				<button onClick={this.props.cancel} className="btn btn-primary">Cancel?</button>
				<button className="btn btn-primary">Continue to Payment</button>
			</div>
		)
	}
}

export default LetterReview