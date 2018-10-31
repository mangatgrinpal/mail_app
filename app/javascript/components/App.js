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
		this.formChecker = this.formChecker.bind(this)
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
				formChecker={this.formChecker}
				stripeKey={this.props.stripeKey}
				handleInputChange={this.handleInputChange}/>
		)
	}

	nextView() {
		this.setState({view: this.state.view += 1})
	}

	nextStep(e) {
		e.preventDefault()
		if (this.formChecker()) {
			if (this.state.view === 2 || this.state.view === 3) {
				document.getElementById('autocomplete').value = '';
			}
			this.nextView();	
		}
	}

	formChecker () {
		

		if (this.state.view === 2) {
			let a = this.state.to.first_name
			let b = this.state.to.last_name
			let c = this.state.to.address1
			let d = this.state.to.city
			let e = this.state.to.state
			let f = this.state.to.zip

			if (a==null || a == "" || b==null || b=="" || c==null || c=="" || d==null || d=="" || e==null || e=="" || f==null || f=="") {
				$('#alertModal').modal('toggle');
				return false;
			} else {
				return true;
			}
		} 
		if (this.state.view === 3) {
			let a = this.state.from.first_name
			let b = this.state.from.last_name
			let c = this.state.from.address1
			let d = this.state.from.city
			let e = this.state.from.state
			let f = this.state.from.zip

			if (a==null || a == "" || b==null || b==""|| c==null || c==""|| d==null || d==""|| e==null || e==""|| f==null || f=="") {
				$('#alertModal').modal('toggle');
				return false;
			} else {
				return true;
			}
		}
		if (this.state.view === 4) {
			let a = this.state.message

			if (a==null || a == "" || a == "<p>&nbsp;</p>" || a == "<p>&nbsp;</p><p>&nbsp;</p>") {
				$('#alertModal').modal('toggle');
				return false;
			} else {
				return true;
			}
		} else {
			return true;
		}
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