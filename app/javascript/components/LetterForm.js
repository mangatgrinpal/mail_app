import React from "react"
import LetterPreview from "./LetterPreview"

class LetterForm extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		var self = this;
		ClassicEditor.create(document.getElementById('editor'), {
			toolbar: ['Heading','bold','italic','bulletedList','numberedList']
		}).then( (editor) => {

			
      editor.model.document.on('change', () => {
				self.props.setMessageState(editor.getData())
			});
    })
    .catch((error) => {
        console.error(error);
    });
	}



	render() {

		return (
			<div className="col-12 letter-prompt background-settings">
			<div className="col-md-8 offset-md-2">
				<h3 className="center" style={{color: 'white'}}>What do you want to say to {this.props.to.first_name} {this.props.to.last_name}?</h3>
				<br/>
				<form>
					<div className="form-group">
						<textarea
							id="editor"
							name="message"
							value={this.props.message}
							onChange={this.props.handleInputChange} />
					</div>
				</form>
				{/*<button onClick={this.props.clearMessage} className="btn btn-primary">Clear Message</button>*/}
				<br/>
				
				
				<div className="btn-group btn-group-lg float-right">
					<button onClick={this.props.goBack} className="btn btn-danger">Go Back</button>
					<button onClick={this.props.nextStep} className="btn btn-success">Review Letter</button>
				</div>
			</div>
			</div>
		)
	}
}

export default LetterForm