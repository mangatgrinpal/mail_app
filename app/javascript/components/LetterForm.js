import React from "react"
import LetterPreview from "./LetterPreview"

class LetterForm extends React.Component {
	constructor(props) {
		super(props);
		this.countCharacters = this.countCharacters.bind(this)
	}

	componentDidMount() {
		var self = this;
		ClassicEditor.create(document.getElementById('editor'), {
			toolbar: ['Heading','bold','italic','bulletedList','numberedList']
		}).then( (editor) => {
			
			editor.setData(self.props.message)
			
      editor.model.document.on('change', () => {
				self.props.setMessageState(editor.getData())
				self.countCharacters();
				self.props.handleContinueButtonChange();
			});
    })
    .catch((error) => {
        console.error(error);
    });
	}

	countCharacters() {
		//counts characters in message
		let text = $(this.props.message).text()
		
		if (text.trim() == "") {
			return (0)
		} else {
			return (text.split('').length)
		}
	}

	characterWarning() {
		if (this.countCharacters() > 3000) {
			return (
				<div className="message-length-error">
					<span style={{color: 'red'}}>Please reduce message length.</span>
				</div>
			)
		} else {
			return (
				<div className="message-length-error" />
			)
		}
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
								name="message" />
						</div>
					</form>
					<span style={{color: 'white'}}>Characters used: {this.countCharacters()} / 3000 {this.characterWarning()}</span>
					{/*<button onClick={this.props.clearMessage} className="btn btn-primary">Clear Message</button>*/}
					<br/>
					<div className="btn-group btn-group-lg float-right">
						<button onClick={this.props.goBack} className="btn btn-danger">Go Back</button>
						<button disabled={this.props.button} onClick={this.props.nextStep} className="btn btn-success">Review Letter</button>
					</div>
				</div>
			</div>
		)
	}
}

export default LetterForm