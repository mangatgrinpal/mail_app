import React from "react"
import Home from "./Home"
import InfoForm from "./InfoForm"
import LetterForm from "./LetterForm"

class App extends React.Component {
	constructor(props) {
		super(props);
		this.nextStep = this.nextStep.bind(this)
		this.state = {
			view: 'home',
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
			"home": Home,
			"toAddress": InfoForm,
			"letterField": LetterForm
		}
	}

	renderView() {
		let Component = this.steps()[this.state.view]

		return (
			<Component
				{...this.state}
				nextStep={this.nextStep}
				handleInputChange={this.handleInputChange}/>
		)
	}

	nextStep(e) {
		e.preventDefault()
		this.setState({view: e.target.id})
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