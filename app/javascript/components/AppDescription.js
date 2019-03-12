import React from 'react'

class AppDescription extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		
	}

	render() {
		return(
			<div className="section2 col-md-12">
				<div className="row step1">
					
					<div id="google-maps-desc" className="col-md-6 center">
						<p>Enter your destination to retrieve address accurately with search powered by Google maps.</p>
					</div>
					<div className="col-md-4 offset-md-1">
						<img id="google-maps" src="https://i2.wp.com/www.henleyshappytrails.com/wp-content/uploads/2017/03/Google-Maps.png?resize=640%2C445"/>
					</div>
				</div>
				<div className="row step2 bg-light">
					<div className="col-md-6 center">
						<i id="envelope-pic" className="far fa-7x fa-envelope"/>
					</div>
					<div id="envelope-desc" className="col-md-6 center">
						<p>Then begin composing your message, you'll get a chance to review it before submitting.</p>
					</div>
					
				</div>
				<div className="row step3">
					
					<div id="stripe-desc" className="col-md-6 center">
						<p>When it looks just right, proceed to checkout with Stripe to securely pay for your order.</p>
					</div>
					<div className="col-md-4 offset-md-1">
						<img id="stripe-logo" src="https://s3-us-west-1.amazonaws.com/ginnysbucket/dev-images/Stripe-Logo-(blue).png"/>
					</div>
				</div>
				<div className="row step4 bg-light">
					
					<div className="col-md-6 center">
						<i id="paper-plane" className="far fa-7x fa-paper-plane"/>
					</div>
					<div id="plane-desc" className="col-md-6 center">
						<p>That's it, your order is complete! You'll get an email confirmation and your letter will be mailed out within 24 hours.</p>
					</div>
				</div>
				<div className="row step5">
					<div className="col-md-6 offset-md-3 center">
						<h3>What are you waiting for?</h3>
						<button onClick={this.props.nextStep} className="btn btn-primary btn-lg">Get Started Now</button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 offset-md-3 center">
						<h3>Or, try out the demo.</h3>
						<button className="btn btn-primary btn-lg">Start Demo</button>
					</div>
				</div>
			</div>
		)
	}
}

export default AppDescription