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
			<div className="col-md-12 background-settings">
				<div className="col-md-8 offset-md-2 confirmation">
					<h2>Thank you for placing your order.</h2>
					<p>Your letter will be prepared and mailed out within 24 hours.</p>
					<br/>
					<br/>
					<p>A copy of your receipt has been sent to {this.props.email}.</p>
					<br/>
					<button onClick={this.props.newLetter} className="btn btn-success">Send another?</button>
				</div>
			</div>
		)
	}
}

export default Confirmation