import React from "react"
import LetterPreview from "./LetterPreview"

class PaymentPage extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="col-md-8 offset-md-2">
				<LetterPreview {...this.props}/>
				<button onClick={this.props.cancel} className="btn btn-danger">Cancel</button>
			</div>
		)
	}
}

export default PaymentPage