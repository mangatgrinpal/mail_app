import React from "react"
import LetterForm from "./LetterForm"

class App extends React.Component {
	constructor(props) {
		super(props);
		this.toggleForm = this.toggleForm.bind(this)
		this.state = {
			isHidden: true,
			name: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zip: '',
			message: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	toggleForm() {
		this.setState({isHidden: !this.state.isHidden, name: '', address1: '', address2: '', city: '', state: '', zip: '', message: ''});
	}

	handleInputChange(message) {
		const target = message.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="jumbotron">
					<h1 className="center">Mailr</h1>
				</div>
				{this.state.isHidden && <div className="row center">
					<div className="col-12">
						<h2>What would you like to do?</h2>
					</div>
					<div className="col-6">
						<button onClick={this.toggleForm} className="btn btn-primary">Write a letter</button>
					</div>
					<div className="col-6">
						<h3>Sign Up/In</h3>
					</div>

				</div>}
				{!this.state.isHidden && <LetterForm toggleForm={this.toggleForm} 
																			handleInputChange={this.handleInputChange}/>}
			</div>
		)
	}
}

export default App