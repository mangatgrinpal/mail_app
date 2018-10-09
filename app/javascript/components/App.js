import React from "react"
import Home from "./Home"
import InfoForm from "./InfoForm"
import LetterForm from "./LetterForm"
import LetterReview from "./LetterReview"
import PaymentPage from "./PaymentPage"

class App extends React.Component {
	constructor(props) {
		super(props);
		this.nextStep = this.nextStep.bind(this)
		this.cancel = this.cancel.bind(this)
		this.goBack = this.goBack.bind(this)
		this.clearMessage = this.clearMessage.bind(this)
		this.state = {
			view: 1,
			firstName: '',
			lastName: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zip: '',
			message: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this)
	}


	handleInputChange(message) {
		const target = message.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	steps() {
		return {
			1: Home,
			2: InfoForm,
			3: LetterForm,
			4: LetterReview,
			5: PaymentPage
		}
	}

	renderView() {

		let Component = this.steps()[this.state.view]

		return (
			<Component
				{...this.state}
				nextStep={this.nextStep}
				cancel={this.cancel}
				goBack={this.goBack}
				clearMessage={this.clearMessage}
				handleInputChange={this.handleInputChange}/>
		)
	}

	nextStep(e) {
		e.preventDefault()
		this.setState({view: this.state.view += 1})
	}

	goBack() {
		this.setState({view: this.state.view -= 1})
	}

	clearMessage() {
		this.setState({message: ''})
	}

	cancel(e) {
		e.preventDefault()
		var answer = confirm("Are you sure?");
		if (answer == true) {
			this.setState({view: 1,
										firstName: '',
										lastName: '',
										address1: '',
										address2: '',
										city: '',
										state: '',
										zip: '',
										message: ''
			})
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