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
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	componentDidMount() {

	}

	initialState() {
		return {
			view: 1,
			message: '',
			email: '',
			to: {
				first_name: '',
				last_name: '',
				address1: '',
				address2: '',
				city: '',
				state: '',
				zip: ''
			},
			from: {
				first_name: '',
				last_name: '',
				address1: '',
				address2: '',
				city: '',
				state: '',
				zip: ''
			}
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
				handleInputChange={this.handleInputChange}/>
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
		this.setState(this.initialState)
	}

	cancel(e) {
		e.preventDefault()
		var answer = confirm("Are you sure?");
		if (answer == true) {
			this.setState(this.initialState)
		}
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
				<h1 className="center">Snail Mail Now</h1>
				<div className="row">
					{this.renderView()}
				</div>
				{description}
			</div>
		)
	}
}

export default App