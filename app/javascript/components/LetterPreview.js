import React from "react"

class LetterPreview extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		var htmlString = this.props.message
		var div = document.getElementById('letter-content');
		div.innerHTML = htmlString.trim();
	}


	render() {
		return (
			<div id="preview" className="container-fluid">
				<div className="row justify-content-start">
					<div className="col-md-4 text-left">
						{this.props.to.first_name} {this.props.to.last_name}
					</div>
				</div>
				<div className="row justify-content-start">
					<div className="col-md-4 text-left">
						{this.props.to.address1} {this.props.to.address2}
					</div>
				</div>
				<div className="row justify-content-tart">
					<div className="col-md-5 text-left">
						{this.props.to.city}, {this.props.to.state} {this.props.to.zip}
					</div>
				</div>
				<br/>
				<br/>
				<div className="row justify-content-start">
					<div id="letter-content" className="col-md-12" />
						
				</div>

			</div>
		)
	}
}

export default LetterPreview