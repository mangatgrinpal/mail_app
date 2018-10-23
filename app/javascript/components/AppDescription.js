import React from 'react'

class AppDescription extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="section2">
				<div className="row step1">
					<div className="col-md-6">
						<img src="https://i2.wp.com/www.henleyshappytrails.com/wp-content/uploads/2017/03/Google-Maps.png?resize=640%2C445"/>
					</div>
					<div className="col-md-6">
						<p>Enter your destination and return address accurately with address search powered by Google maps.</p>
					</div>
				</div>
				<div className="row step2">
					<div className="col-md-6">
						<i className="far fa-7x fa-envelope"/>
					</div>
					<div className="col-md-6">
						<p>Compose your message, you will get a chance to review it before submitting.</p>
					</div>
				</div>
				<div className="row step3">
					<div className="col-md-6">
						<img src="https://s3-us-west-1.amazonaws.com/ginnysbucket/dev-images/Stripe-Logo-(blue).png"/>
					</div>
					<div className="col-md-6">
						<p>When it looks just right, proceed to checkout with Stripe to securely pay for your order.</p>
					</div>
				</div>
				<div className="row step4">
					<div className="col-md-6">
						<i className="far fa-7x fa-paper-plane"/>
					</div>
					<div className="col-md-6">
						<p>That's it! Your order is complete and will be mailed out within 24 hours.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default AppDescription