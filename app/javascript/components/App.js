import React from "react"
import Home from "./Home"
import InfoForm from "./InfoForm"
import LetterForm from "./LetterForm"
import LetterReview from "./LetterReview"
import PaymentPage from "./PaymentPage"
import Confirmation from "./Confirmation"
import AppDescription from "./AppDescription"

class App extends React.Component {
	constructor(props) {
		super(props);
		this.nextStep = this.nextStep.bind(this)
		this.cancel = this.cancel.bind(this)
		this.goBack = this.goBack.bind(this)
		this.goHome = this.goHome.bind(this)
		this.googleAutofillState = this.googleAutofillState.bind(this)
		this.setMessageState = this.setMessageState.bind(this)
		this.newLetter = this.newLetter.bind(this)
		this.redirectAfterPayment = this.redirectAfterPayment.bind(this)
		this.clearMessage = this.clearMessage.bind(this)
		this.state = this.initialState()
		//react docs suggest binding for performance
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleContinueButtonChange = this.handleContinueButtonChange.bind(this)
		this.handleKeyPress = this.handleKeyPress.bind(this)
	}

	initialState() {
		var details = {
				first_name: '',
				last_name: '',
				address1: '',
				address2: '',
				city: '',
				state: '',
				zip: ''
			}

		return {
			button: true,
			view: 1,
			message: '',
			email: '',
			to: Object.assign({}, details),
			from: Object.assign({}, details)
		}
	}

	handleInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		let newState = Object.assign({}, this.state)

		if (this.state.view === 2) {
			newState["to"][name] = value
			this.setState(newState);
		}
		else if (this.state.view === 3) {
			newState["from"][name] = value
			this.setState(newState);
		}
		else {
			this.setState({
				[name]: value
			});
		}
	}

	handleKeyPress(e) {
		if (e.key == "Enter") {
			e.preventDefault();
		}
	}

	handleContinueButtonChange(e) {
		var button;
		if (this.state.view == 2) {
			
			let firstName = this.state.to.first_name
			let lastName = this.state.to.last_name
			let autoComplete = document.getElementById('autocomplete').value

			if (firstName=='' || lastName=='' || autoComplete=='') {
				
				button = true;
				
			} else {
				button = false;
			}
		} else if (this.state.view == 3) {

			let firstName = this.state.from.first_name
			let lastName = this.state.from.last_name
			let autoComplete = document.getElementById('autocomplete').value

			if (firstName=='' || lastName=='' || autoComplete=='') {
				
				button = true;
				
			} else {
				button = false;
			}
		
		} else if (this.state.view == 4) {

			let text = $(this.state.message).text()
			let textLength = text.split('').length
			
			if (text.trim() == "" || textLength > 3000) {
				button = true;
				
			} else {
				button = false
				
			}
		}
		
		this.setState({button: button})
	}

	steps() {
		return {
			1: Home,
			2: InfoForm,
			3: InfoForm,
			4: LetterForm,
			5: LetterReview,
			6: PaymentPage,
			7: Confirmation
		}
	}

	

	googleAutofillState(key, value) {
		let newState = Object.assign({}, this.state)

		if (this.state.view === 2) {
			newState["to"][key] = value
			this.setState(newState);
		}
		else if (this.state.view === 3) {
			newState["from"][key] = value
			this.setState(newState);
		}
	}

	setMessageState(value) {
		this.setState({message: value})
	}


	renderView() {
		let addressState;
		let Component = this.steps()[this.state.view]

		if (this.state.view === 2) {
			addressState = this.state.to
		}
		else if (this.state.view === 3) {
			addressState = this.state.from
		}

		return (
			<Component
				{...this.state}
				address={addressState}
				nextStep={this.nextStep}
				cancel={this.cancel}
				goBack={this.goBack}
				goHome={this.goHome}
				googleAutofillState={this.googleAutofillState}
				setMessageState={this.setMessageState}
				newLetter={this.newLetter}
				redirectAfterPayment={this.redirectAfterPayment}
				clearMessage={this.clearMessage}
				formChecker={this.formChecker}
				stripeKey={this.props.stripeKey}
				handleContinueButtonChange={this.handleContinueButtonChange}
				handleInputChange={this.handleInputChange}
				handleKeyPress={this.handleKeyPress}/>
		)
	}

	nextView() {
		this.setState({view: this.state.view += 1})
	}

	nextStep(e) {
		e.preventDefault()		
		if (this.state.view === 2 || this.state.view === 3) {
			document.getElementById('autocomplete').value = '';
		}
		this.nextView();
		this.setState({button: true})
	}

	
	goBack(e) {
		e.preventDefault()
		this.setState({view: this.state.view -= 1})
	}

	clearMessage() {
		this.setState({message: ''})
	}

	redirectAfterPayment() {
		this.nextView();
	}

	goHome() {
		this.setState({view: 1})
	}

	newLetter() {
		this.setState(this.initialState, ()=>{this.setState({view: this.state.view += 1})})
	}

	cancel(e) {
		e.preventDefault()
		
		this.setState(this.initialState)
		
		window.scrollTo(0, 0);
	}

	render() {
		var description;
		if (this.state.view === 1) {
			description = 				
				<AppDescription nextStep={this.nextStep}/>
		} else {
			description = <div/>
		}
		return (
			<div className="container-fluid">
				<div className="row main-content">
					{this.renderView()}
				</div>
				<div className="row">
				{description}
				</div>
			</div>
		)
	}
}

export default App