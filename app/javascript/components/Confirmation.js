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
				<button onClick={this.props.goHome} className="btn btn-primary">Send another?</button>
				<p>(Optional) You can create an account to view your order history.</p>
				<form id="sign-up-form">
					<div className="form-group">
						<label>Email</label>
						<input
							type="text"
							name="email"
							className="form-control"
							value={this.props.email} readOnly/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							id="password"
							type="password"
							name="password"
							className="form-control"/>
					</div>
					<div className="form-group">
						<label>Confirm Password</label>
						<input
							id="passwordConfirm"
							type="password"
							name="passwordConfirm"
							className="form-control"/>
					</div>
					<button onClick={this.createAccount} className="btn btn-primary">Create Account</button>
				</form>
				<br/>
				
			</div>
		)
	}
}

export default Confirmation