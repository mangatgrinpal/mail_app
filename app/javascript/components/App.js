import React from "react"
import Home from "./Home"
import InfoForm from "./InfoForm"
import LetterForm from "./LetterForm"
import LetterReview from "./LetterReview"
import PaymentPage from "./PaymentPage"
import Confirmation from "./Confirmation"

class App extends React.Component {
	constructor(props) {
		super(props);
		this.nextStep = this.nextStep.bind(this)
		this.cancel = this.cancel.bind(this)
		this.goBack = this.goBack.bind(this)
		this.goHome = this.goHome.bind(this)
		this.redirectAfterPayment = this.redirectAfterPayment.bind(this)
		this.clearMessage = this.clearMessage.bind(this)
		this.state = {
			view: 7,
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
		this.handleInputChange = this.handleInputChange.bind(this)
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
				redirectAfterPayment={this.redirectAfterPayment}
				clearMessage={this.clearMessage}
				handleInputChange={this.handleInputChange}/>
		)
	}

	nextStep(e) {
		e.preventDefault()
		this.setState({view: this.state.view += 1})
	}

	goBack(e) {
		e.preventDefault()
		this.setState({view: this.state.view -= 1})
	}

	clearMessage() {
		this.setState({message: ''})
	}

	redirectAfterPayment() {
		this.setState({view: this.state.view += 1})
	}

	goHome() {
		this.setState({view: 1})
	}

	cancel(e) {
		e.preventDefault()
		var answer = confirm("Are you sure?");
		if (answer == true) {
			this.setState(this.initialState)
		}
	}

	render() {
		
		return (
			<div className="container-fluid home">
				<h1 className="center">Mailr</h1>
				<div className="section1">
					{this.renderView()}
				</div>
				<br/>
			</div>
		)
	}
}

export default App