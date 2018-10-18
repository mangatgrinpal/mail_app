import React from "react"

class UserSignup extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
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