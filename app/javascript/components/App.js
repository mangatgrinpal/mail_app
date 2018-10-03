import React from "react"
import LetterForm from "./LetterForm"

class App extends React.Component {
	constructor(props) {
		super(props);
		this.showForm = this.showForm.bind(this)
		this.state = {
			isHidden: true
		}
	}

	showForm() {
		this.setState({isHidden: !this.state.isHidden});
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="jumbotron">
					<h1 className="center">Hello World</h1>
				</div>
				{this.state.isHidden && <div className="row center">
					<div className="col-12">
						<h2>What would you like to do?</h2>
					</div>
					<div className="col-6">
						<button onClick={this.showForm} className="btn btn-primary">Write a letter</button>
					</div>
					<div className="col-6">
						<h3>Sign Up/In</h3>
					</div>

				</div>}
				{!this.state.isHidden && <LetterForm/>}
			</div>
		)
	}
}

export default App