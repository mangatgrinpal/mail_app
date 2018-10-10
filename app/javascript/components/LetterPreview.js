import React from "react"

class LetterPreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="preview" className="container-fluid">
				<div className="row justify-content-end">
					<div className="col-md-4 text-right">
						{this.props.to.firstName} {this.props.to.lastName}
					</div>
				</div>
				<div className="row justify-content-end">
					<div className="col-md-4 text-right">
						{this.props.to.address1} {this.props.to.address2}
					</div>
				</div>
				<div className="row justify-content-end">
					<div className="col-md-5 text-right">
						{this.props.to.city}, {this.props.to.state} {this.props.to.zip}
					</div>
				</div>
				<br/>
				<br/>
				<div className="row justify-content-start">
					<div className="col-md-12">
						{this.props.message}
					</div>
				</div>

			</div>
		)
	}
}

export default LetterPreview