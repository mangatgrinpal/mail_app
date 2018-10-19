import React from "react"

class Confirmation extends React.Component {
	constructor(props) {
		super(props);
		this.createAccount = this.createAccount.bind(this)
	}



	createAccount(e) {
		e.preventDefault();
		var self = this;
		$.ajax("/users", {
			dataType: "JSON",
			data: {sign_up: {
				email: self.props.email,
				password: this.getPassword(),
				password_confirmation: this.getPasswordConfirm()
			}},
			type: "POST",
			success: ()=> {
				alert('hello')
			}
		})
	}

	getPassword() {
		return (
			document.getElementById('password').value
		)
	}

	getPasswordConfirm() {
		return (
			document.getElementById('passwordConfirm').value
		)
	}

	render() {
		return (
			<div className="col-md-8 offset-md-2">
				<h3>Thanks for placing your order.</h3>
				<p>Your receipt has been sent to {this.props.email}.</p>
				<button onClick={this.props.newLetter} className="btn btn-success">Send another?</button>
				
				
			</div>
		)
	}
}

export default Confirmation